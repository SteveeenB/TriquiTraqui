import { useState } from 'react';
import Square from './Square';

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner === "Empate") {
        status = "Empate";
    } else if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <>
            <div className="text-center mb-3 font-medium font-bold text-xl md:text-3xl">
                {status}
            </div>
            <div className="max-w-[300px] md:max-w-[400px] mx-auto">
                <div className='flex '>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} ></Square>
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)}></Square>
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)}></Square>
                </div>
                <div className='flex'>
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}></Square>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}></Square>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}></Square>
                </div>
                <div className='flex'>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}></Square>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}></Square>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}></Square>
                </div>
            </div>
        </>
    );
}
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li className='border-slate-300 border p-4 rounded-md w-50 hover:bg-slate-400' key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-fit">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info ml-8 text-xl ">
                <ol className=''>{moves}</ol>
            </div>
        </div>
    );
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
        if (i === lines.length - 1 && !squares.includes(null)) {
            return "Empate";
        }
    }
    return null;
}