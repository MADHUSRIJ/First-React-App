import '../App.css';
import React from "react";

export function TextField({value, handleChange}) {
    return (
        <input className="TextField" id="counterText" type='number' value={value} onChange={handleChange} />
    );
}
