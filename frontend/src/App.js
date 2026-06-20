import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__logo">VS</div>
        <div>
          <div className="app-header__title">VectorShift Pipeline Builder</div>
          <div className="app-header__subtitle">
            Drag nodes onto the canvas and connect them to build a pipeline.
          </div>
        </div>
      </header>
      <PipelineToolbar />
      <div className="app-canvas">
        <PipelineUI />
      </div>
      <footer className="app-footer">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
