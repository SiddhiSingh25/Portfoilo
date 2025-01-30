import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Left from "./Left"
import Right from "./Right"
import React from "react";
function Home() {
    return (
        <>
            <div className="min-h-[100vh] w-[100vw] flex items-center justify-center " id="home">
                <div className="h-[100%] w-[88%] flex items-center justify-center flex-col-reverse md:flex-row">
                <Left/>
                <Right/>
                </div>
            </div>
        </>
    )
}
export default Home