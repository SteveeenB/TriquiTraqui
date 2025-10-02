
import { useState } from 'react';

export default function Square({value, onSquareClick  }) {
    
    return <button onClick={onSquareClick} className="p-5 solid border">{value}</button>;

}