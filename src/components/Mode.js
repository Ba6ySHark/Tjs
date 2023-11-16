import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";

export default function Model(props) {
    const { scene } = useGLTF("/assets/robo-shiba/scene.gltf");

    return (
        <primitive object={scene} {...props}>
            <MeshWobbleMaterial/>
        </primitive>
    );
}