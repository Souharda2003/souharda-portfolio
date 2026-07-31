import "./AvailabilityBadge.css";

function AvailabilityBadge({ status }) {
  return (
    <div className="availability-badge">
      <span className="status-dot"></span>

      <span>{status}</span>
    </div>
  );
}

export default AvailabilityBadge;