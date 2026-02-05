import { useSelector } from "react-redux";

import type { RootState } from "../store";
import ElevatorCar from "./ElevatorCar";

export function ElevatorShaft() {
  const elevators = useSelector((s: RootState) => s.elevator.elevators);
  return (
    <div className="shaft">
      {elevators.map((e) => (
        <ElevatorCar key={e.id} elevator={e} />
      ))}
    </div>
  );
}
