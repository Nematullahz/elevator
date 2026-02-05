import { useDispatch } from "react-redux";
import { addInternalTarget } from "../store/elevatorReducer";

export default function InternalPanel({ elevatorId }: { elevatorId: number }) {
  const dispatch = useDispatch();
  const floors = [5, 4, 3, 2, 1, 0];

  return (
    <div className="panelInside">
      {floors.map((f) => (
        <button
          key={f}
          onClick={() => dispatch(addInternalTarget({ elevatorId, floor: f }))}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
