import "./TimelineNode.css";

function TimelineNode({ status }) {
  return (
    <div className="timeline-node">

      <div
        className={`timeline-dot ${
          status === "Current" ? "active" : ""
        }`}
      />

    </div>
  );
}

export default TimelineNode;