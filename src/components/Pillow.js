import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../util/state";

export default function Pillow() {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/cusion.gltf');
    const fullTexture = useTexture(snap.fullDecal);

    return (
        <group>
            <mesh
                castShadow
                geometry={nodes.Cusion.geometry}
                material={materials.Material}
                material-roughness={1}
                dispose={null}
            ></mesh>
        </group>
    );
}