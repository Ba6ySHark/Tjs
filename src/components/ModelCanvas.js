import { Canvas } from "@react-three/fiber";
import Pillow from "./Pillow";
import Camera from "./Camera";
import Backdrop from "./Backdrop";
import { Environment, Center } from "@react-three/drei";

export default function ModelCanvas() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <Camera>
                
                <Center>
                    <Pillow/>
                </Center>
            </Camera>
        </Canvas>
    );
}