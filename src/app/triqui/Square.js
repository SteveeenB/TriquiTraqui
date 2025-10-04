
import { useState } from 'react';

export default function Square({ value, onSquareClick }) {

    return <button onClick={onSquareClick} className="flex items-center w-[80px] h-[80px] md:w-[100px] md:h-[100px]  bg-black-100 border border-slate-300 rounded-md flex items-center justify-center text-2xl md:text-4xl textfont-bold hover:bg-slate-400 transition"
    >{value}</button>;

}