import '../App.css';
import React, { useState } from "react";
import { CounterButton } from './CounterButton';
import { TextField } from './TextField';

export function Counter() {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(prevValue => (prevValue < 10) ? prevValue + 1 : prevValue);
    };

    const handleDecrement = () => {
        setValue(prevValue => (prevValue > 0) ? prevValue - 1 : prevValue);
    };

    const handleChange = (event) => {
        setValue(parseInt(event.target.value) || 0); 
    };

    return (
        <div className="Main">
            <CounterButton symbol="-" onClick={handleDecrement} />
            <TextField value={value} onChange={handleChange}/>
            <CounterButton symbol="+" onClick={handleIncrement} />
        </div>
    );
}
