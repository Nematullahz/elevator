import type { Elevator } from "../store/elevatorReducer";
import InternalPanel from "./InternalPanel";
export default function ElevatorCar({ elevator }: { elevator: Elevator }) {
  const y = (5 - elevator.currentFloor) * 80;

  return (
    <div
      className="elevator"
      style={{
        transform: `translateY(${y}px)`,
        left: elevator.id === 1 ? "40px" : "120px",
      }}
    >
      <div className={`door ${elevator.door}`} />
      <span style={{ position: "absolute", top: 0 }}>
        {elevator.currentFloor}
      </span>
      <InternalPanel elevatorId={elevator.id} />
    </div>
  );
}
