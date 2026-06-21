// submit.js

import { useState } from 'react';
import { useStore } from './store';

const API_URL = 'http://localhost:8000/pipelines/parse';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const { num_nodes, num_edges, is_dag } = await response.json();
      setToast({
        variant: is_dag ? 'success' : 'warning',
        title: 'Pipeline submitted',
        message: `${num_nodes} ${num_nodes === 1 ? 'node' : 'nodes'}, ${num_edges} ${
          num_edges === 1 ? 'edge' : 'edges'
        } — ${is_dag ? 'Valid DAG ✅' : 'Contains a cycle ❌'}`,
      });
    } catch (error) {
      setToast({
        variant: 'error',
        title: "Couldn't reach the backend",
        message: 'Make sure the API is running, then try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="submit-button"
        onClick={handleSubmit}
        disabled={submitting}
      >
        {submitting ? 'Submitting…' : 'Submit Pipeline'}
      </button>

      {toast && (
        <div className={`toast toast--${toast.variant}`} role="alert">
          <div className="toast__body">
            <div className="toast__title">{toast.title}</div>
            <div className="toast__message">{toast.message}</div>
          </div>
          <button
            type="button"
            className="toast__close"
            aria-label="Dismiss"
            onClick={() => setToast(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};
