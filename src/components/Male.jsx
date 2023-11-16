/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 scene.gltf 
Author: ToxicSmoke (https://sketchfab.com/ToxicSmoke)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/basic-male-model-af32da689e234a26aaf2d267618cadc5
Title: Basic male model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Decal, useTexture } from '@react-three/drei'

export function Male(props) {
  const { nodes, materials } = useGLTF('/assets/male/scene.gltf')
  const texture = useTexture("/three.png")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']}>
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} material={materials['Scene_-_Root']}>
        </mesh>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']}>
          {/* <Decal
            debug // Makes "bounding box" of the decal visible
            position={[0, -0.45, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={0.5} // Scale of the decal
          >
            <meshBasicMaterial 
              map={texture} 
              polygonOffset
              polygonOffsetFactor={-1} // The material should take precedence over the original
            />
          </Decal> */}
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Scene_-_Root']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['Scene_-_Root']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
