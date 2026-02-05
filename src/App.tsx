/* eslint-disable @typescript-eslint/ban-ts-comment */

import type { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Building from "./features/building";
import { QueuePanel } from "./features/QueuePanel";
import { step } from "./store/elevatorReducer";

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(step());
    }, 800);

    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="app">
      <Building />
      <QueuePanel />
    </div>
  );
};

export default App;
