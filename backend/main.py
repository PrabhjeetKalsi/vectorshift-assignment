from collections import deque

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ConfigDict

app = FastAPI()

# Allow the React dev server (CRA defaults to port 3000) to call the API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)


class Node(BaseModel):
    # React Flow nodes carry many fields; we only need the id, but keep the rest.
    model_config = ConfigDict(extra='allow')
    id: str


class Edge(BaseModel):
    # React Flow edges describe a directed connection source -> target.
    model_config = ConfigDict(extra='allow')
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: list[Node]
    edges: list[Edge]


def is_dag(node_ids: set[str], edges: list[Edge]) -> bool:
    """Return True if the directed graph has no cycles (Kahn's algorithm)."""
    adjacency: dict[str, list[str]] = {node_id: [] for node_id in node_ids}
    in_degree: dict[str, int] = {node_id: 0 for node_id in node_ids}

    for edge in edges:
        # Ignore edges that reference nodes not present in the pipeline.
        if edge.source not in node_ids or edge.target not in node_ids:
            continue
        adjacency[edge.source].append(edge.target)
        in_degree[edge.target] += 1

    queue = deque(node_id for node_id, degree in in_degree.items() if degree == 0)
    visited = 0

    while queue:
        node_id = queue.popleft()
        visited += 1
        for neighbor in adjacency[node_id]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # If every node was processed, no cycle exists.
    return visited == len(node_ids)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    node_ids = {node.id for node in pipeline.nodes}
    return {
        'num_nodes': len(pipeline.nodes),
        'num_edges': len(pipeline.edges),
        'is_dag': is_dag(node_ids, pipeline.edges),
    }
