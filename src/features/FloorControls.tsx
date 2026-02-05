import { useDispatch } from "react-redux";
import { callElevator } from "../store/elevatorReducer";

export function FloorControls({ floor }: { floor: number }) {
  const dispatch = useDispatch();

  return (
    <div className="floor">
      <span>Floor {floor}</span>

      {floor !== 5 && (
        <button
          onClick={() => {
            dispatch(callElevator(floor));
          }}
        >
          ↑
        </button>
      )}

      {floor !== 0 && (
        <button onClick={() => dispatch(callElevator(floor))}>↓</button>
      )}
    </div>
  );
}
