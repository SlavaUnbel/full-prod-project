import { useState } from 'react';

import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(prevState => prevState + 1);
    }

    return (
        <div>
            <button onClick={ increment }>increment</button>

            {count}
        </div>
    );
};