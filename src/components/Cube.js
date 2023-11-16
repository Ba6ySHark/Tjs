import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Cube(props) {
    // const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);

    // useFrame((state, delta) => {
    //     ref.current.rotation.x += delta;
    //     ref.current.rotation.y += delta;
    //     ref.current.position.z = Math.sin(state.clock.elapsedTime);
    // });

    return (
        <mesh
            position={props.position}
            // ref={ref}
            onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerLeave={() => setIsHovered(false)}
        >
            <boxGeometry args={props.size}/>
            {/* <meshStandardMaterial color={isHovered ? "blue" : props.color}/> */}
            {new (<MeshWobbleMaterial color={props.color} factor={0.5} speed={0.5}/>)}
        </mesh>
    );
}