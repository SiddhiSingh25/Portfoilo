import { useGLTF, useTexture, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

function MacContainer() {
    const model = useGLTF("./mac.glb");
    const tex = useTexture("./red.jpg");
    const meshes = {};

    // Traverse the scene to collect meshes
    model.scene.traverse((e) => {
        if (e.isMesh) meshes[e.name] = e;
    });

    // Apply texture and material properties if matte mesh exists
    if (meshes.matte) {
        const material = meshes.matte.material;
    
        // Use a MeshBasicMaterial if you don't want lighting effects to alter the texture
        material.map = tex;
        material.emissiveIntensity = 0; // Ensure no emissive light affects appearance
        material.metalness = 0; // Make sure it is not reflective
        material.roughness = 1; // Make it completely rough (non-reflective)
        material.needsUpdate = true; // Make sure the material updates
    }


    // Use useScroll to get scroll data
    const data = useScroll();

    // Update the rotation based on scroll position
    useFrame(() => {
        if (meshes.screen) {
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
        }
    });

    return (
        <group position={[0, -9, 18]}>
            <primitive object={model.scene} />
        </group>
    );
}

export default MacContainer;
