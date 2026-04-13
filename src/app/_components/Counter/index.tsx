'use client'
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return <div >
        <div className="flex gap-2">
            <button className="p-2 border-2" onClick={() => setCount(count - 1)}>
                Click down
            </button>
            <button className="p-2 border-2" onClick={() => setCount(count + 1)}>
                Click up
            </button>
        </div>
        {count}
    </div>
}

export default Counter;