import '../App.css';
import React from "react";

export function CounterButton({ symbol, onClick  }) {
    return (<div className="ButtonStyle" onClick={onClick}>{symbol}</div>);
}
