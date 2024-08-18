import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";

export function HeroSection() {
    return (
        <div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-3xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    MERAJUL HAQUE
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    My name is Merajul Haque and I am a Software Developer, and I am very passionate and dedicated to my work. With 3 years experience as a web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                </p>
            </div>
            <BackgroundBeams />
        </div>
    );
}
