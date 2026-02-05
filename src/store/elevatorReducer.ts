import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Elevator {
  id: number;
  currentFloor: number;
  targets: number[];
  door: "open" | "closed";
}

interface State {
  elevators: Elevator[];
  requests: number[];
}

const initialState: State = {
  elevators: [
    { id: 1, currentFloor: 0, targets: [], door: "closed" },
    { id: 2, currentFloor: 0, targets: [], door: "closed" },
  ],
  requests: [],
};

const slice = createSlice({
  name: "elevator",
  initialState,
  reducers: {
    callElevator(state, action: PayloadAction<number>) {
      const floor = action.payload;
      state.requests.push(floor);

      // choose nearest elevator
      let best = state.elevators[0];
      let min = Math.abs(best.currentFloor - floor);

      state.elevators.forEach((e) => {
        const d = Math.abs(e.currentFloor - floor);
        if (d < min) {
          best = e;
          min = d;
        }
      });

      best.targets.push(floor);
    },

    addInternalTarget(
      state,
      action: PayloadAction<{ elevatorId: number; floor: number }>,
    ) {
      const { elevatorId, floor } = action.payload;

      const elevator = state.elevators.find((e) => e.id === elevatorId);
      if (!elevator) return;

      if (!elevator.targets.includes(floor)) {
        elevator.targets.push(floor);
      }
    },

    step(state) {
      state.elevators.forEach((e) => {
        if (!e.targets.length) return;

        const target = e.targets[0];

        if (e.currentFloor < target) {
          e.currentFloor++;
          e.door = "closed";
        } else if (e.currentFloor > target) {
          e.currentFloor--;
          e.door = "closed";
        } else {
          e.door = "open";
          e.targets.shift();
          state.requests.shift();
        }
      });
    },
  },
});

export const { callElevator, step, addInternalTarget } = slice.actions;
export default slice.reducer;
