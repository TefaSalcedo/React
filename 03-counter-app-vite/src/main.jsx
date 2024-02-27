// Importing React and ReactDOM from 'react' package
import React from "react";
import ReactDOM from "react-dom/client";
// import { Appt } from "./tarea1";
// import {FirsAppt} from "./props"
import { HelloWorld } from "./FirsApp";
import { CounterApp } from "./counterApp"
import './styleglobal.css'

const rootElement = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(rootElement);
rootContainer.render(
  <React.StrictMode>
    <>
    <CounterApp value={12}/>
    <HelloWorld />
    </>
  </React.StrictMode>
);


