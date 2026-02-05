import { ElevatorShaft } from "./ElevatorShaft";
import { FloorControls } from "./FloorControls";

const floors = [5, 4, 3, 2, 1, 0];

export default function Building() {
  return (
    <div className="layout">
      <div className="building">
        {floors.map((f) => (
          <div key={f} className="row">
            <FloorControls floor={f} />
          </div>
        ))}

        <ElevatorShaft />
      </div>
    </div>
  );
}
