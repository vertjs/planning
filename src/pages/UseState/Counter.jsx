import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
    
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    
    return (
        <div className="App-header">
            <div>{count}</div>
            <div className="buttons">
                <button type="button" className="btn btn-info btn-lg" onClick={decrement}>-</button>
                <button type="button" className="btn btn-info btn-lg" onClick={increment}>+</button>
            </div>
        </div>
    )
};