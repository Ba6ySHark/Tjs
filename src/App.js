import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import Model from "./components/Mode";
import { Shiba } from "./components/Shiba"
import { Male } from "./components/Male";
import { OrbitControls } from "@react-three/drei";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h2>Controls</h2>
        <ul>
          <li>Position</li>
          <li>Scale</li>
          <li>Rotation</li>
          <li>Upload Pattern from JSON</li>
        </ul>
      </div>
      <div className="canvas">
        <Canvas>
          {/* <directionalLight position={[0, 0, 2]}/> */}
          <ambientLight intensity={0.5} />
          {/* <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"red"}/>
          <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={"orange"}/>
          <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={"blue"}/>
          <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={"yellow"}/> */}
          {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"yellow"} /> */}
          <Male />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}