
import { useState } from 'react';

export default function Square({value, onSquareClick  }) {
    
    return <button onClick={onSquareClick} className="m-3 p-3 solid border">{value}</button>;

}