import React from 'react';
import './script'

const Counted = () => {
       return(
        <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* <!-- header --> */}
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>

        {/* <!-- counters --> */}
        <div class="mx-auto max-w-md mt-10 space-y-5">
            <div
                class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
            >
                <div id="counter" class="text-2xl font-semibold"></div>
                <div class="flex space-x-3">
                    <button
                        id="increment"
                        class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    >
                        Increment
                    </button>
                    <button
                        id="decrement"
                        class="bg-red-400 text-white px-3 py-2 rounded shadow"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    </div>
       )
};

export default Counted;