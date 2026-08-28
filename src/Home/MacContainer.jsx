import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import * as THREE from "three";

function MacContainer({ isPlaying, setIsPlaying, videoRef }) {
    const model = useGLTF("./mac.glb");
    const [videoTexture, setVideoTexture] = useState(null);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = "./videoSid.mp4";
        video.crossOrigin = "Anonymous";
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        video.onerror = () => {
            if (video.src.includes("videoSid.mp4")) {
                video.src = "./video.mp4";
            }
        };

        if (videoRef) {
            videoRef.current = video;
        }

        const texture = new THREE.VideoTexture(video);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.anisotropy = 16;
        texture.format = THREE.RGBAFormat;

        setVideoTexture(texture);

        return () => {
            video.pause();
            video.removeAttribute("src");
            video.load();
            texture.dispose();
        };
    }, [videoRef]);

    useEffect(() => {
        if (videoRef?.current) {
            if (isPlaying) {
                videoRef.current.play().catch((err) => console.log("Video play error:", err));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, videoRef]);

    const meshes = {};

    // Traverse the scene to collect meshes
    model.scene.traverse((e) => {
        if (e.isMesh) meshes[e.name] = e;
    });

    // Apply video texture with MeshBasicMaterial (no environmental lighting filters, reflections, or tone-mapping overlays)
    if (meshes.matte && videoTexture) {
        meshes.matte.material = new THREE.MeshBasicMaterial({
            map: videoTexture,
            toneMapped: false,
        });
        meshes.matte.material.needsUpdate = true;
    }

    // Use useScroll to get scroll data
    const data = useScroll();

    // Update the rotation based on scroll position
    useFrame(() => {
        if (meshes.screen) {
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data?.offset || 0) * 90);
        }
    });

    return (
        <group position={[0, -9, 18]} onClick={() => setIsPlaying && setIsPlaying((prev) => !prev)}>
            <primitive object={model.scene} />
        </group>
    );
}

useGLTF.preload("./mac.glb");

export default MacContainer;

