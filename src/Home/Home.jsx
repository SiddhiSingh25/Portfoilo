import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Left from "./Left"
import Right from "./Right"
import React from "react";
function Home() {
    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center py-8 md:py-16 px-4 sm:px-8 md:px-12" id="home">
                <div className="w-full max-w-7xl flex items-center justify-center flex-col-reverse md:flex-row gap-8 md:gap-4">
                <Left/>
                <Right/>
                </div>
            </div>
        </>
    )
}
export default Home