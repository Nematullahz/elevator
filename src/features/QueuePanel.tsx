import { useSelector } from "react-redux";
import type { RootState } from "../store";

export function QueuePanel() {
  const requests = useSelector((s: RootState) => s.elevator.requests);

  return (
    <div className="queue">
      <h3>Pending</h3>
      {requests.map((r, i) => (
        <div key={i}>Floor {r}</div>
      ))}
    </div>
  );
}
