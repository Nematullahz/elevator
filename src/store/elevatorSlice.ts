import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface ElevatorState {
  elevators: Elevator[];
  hallRequests: HallRequest[];
}
export type Direction = "UP" | "DOWN" | "IDLE";
export type DoorState = "OPEN" | "OPENING" | "CLOSING" | "CLOSED";
export interface HallRequest {
  floor: number;
  direction: "UP" | "DOWN";
  timestamp: number;
}

export interface Elevator {
  id: number;
  currentFloor: number;
  direction: Direction;
  door: DoorState;
  queue: number[];
  moving: boolean;
}

const initialState: ElevatorState = {
  elevators: [
    {
      id: 1,
      currentFloor: 0,
      direction: "IDLE",
      door: "CLOSED",
      queue: [],
      moving: false,
    },
    {
      id: 2,
      currentFloor: 0,
      direction: "IDLE",
      door: "CLOSED",
      queue: [],
      moving: false,
    },
  ],
  hallRequests: [],
};

const elevatorSlice = createSlice({
  name: "elevator",
  initialState,
  reducers: {
    addHallRequest(state, action: PayloadAction<HallRequest>) {
      const exists = state.hallRequests.some(
        (r) =>
          r.floor === action.payload.floor &&
          r.direction === action.payload.direction,
      );

      if (!exists) {
        state.hallRequests.push(action.payload);
      }
    },

    clearHallRequest(
      state,
      action: PayloadAction<{ floor: number; direction: "UP" | "DOWN" }>,
    ) {
      state.hallRequests = state.hallRequests.filter(
        (r) =>
          !(
            r.floor === action.payload.floor &&
            r.direction === action.payload.direction
          ),
      );
    },

    updateElevator(state, action: PayloadAction<Elevator>) {
      const index = state.elevators.findIndex(
        (e) => e.id === action.payload.id,
      );
      if (index !== -1) {
        state.elevators[index] = action.payload;
      }
    },
  },
});

export const { addHallRequest, clearHallRequest, updateElevator } =
  elevatorSlice.actions;

export default elevatorSlice.reducer;
