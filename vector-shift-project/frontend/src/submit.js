// submit.js
// Part 4: Send pipeline to backend and show result modal

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [loading, setLoading]   = useState(false);
  const [modal, setModal]       = useState(null);  // { num_nodes, num_edges, is_dag } or { error }

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) throw new Error(`Server error: ${response.status}`);

      const data = await response.json();
      setModal({ ...data });
    } catch (err) {
      setModal({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="submit-container">
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Submit Pipeline'}
        </button>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>

            {modal.error ? (
              <>
                <div className="modal-header modal-header-error">
                  <span className="modal-icon">⚠️</span>
                  <span>Connection Error</span>
                </div>
                <div className="modal-body">
                  <p className="modal-error-text">{modal.error}</p>
                  <p className="modal-hint">Make sure backend is running on port 8000</p>
                </div>
              </>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-icon">🔬</span>
                  <span>Pipeline Analysis</span>
                </div>
                <div className="modal-body">
                  <div className="modal-row">
                    <span className="modal-label">Nodes</span>
                    <span className="modal-value">{modal.num_nodes}</span>
                  </div>
                  <div className="modal-divider" />
                  <div className="modal-row">
                    <span className="modal-label">Edges</span>
                    <span className="modal-value">{modal.num_edges}</span>
                  </div>
                  <div className="modal-divider" />
                  <div className="modal-row">
                    <span className="modal-label">Is DAG</span>
                    <span className={`modal-value ${modal.is_dag ? 'modal-yes' : 'modal-no'}`}>
                      {modal.is_dag ? '✅ Yes' : '❌ No — has cycles'}
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="modal-footer">
              <button className="modal-ok-btn" onClick={() => setModal(null)}>
                OK
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
