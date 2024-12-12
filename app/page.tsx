"use client";

import { useState } from "react";
export default function Home() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter((previous) => previous + 1);
    const decrement = () => setCounter((previous) => previous - 1);
    const reset = () => setCounter(0);

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="text-2xl font-bold">Simple Counter</h1>
            <p className="text-4xl font-semibold">{counter}</p>
            <div className="flex space-x-4">
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600 transition"
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
