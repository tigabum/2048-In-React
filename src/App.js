import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[score, setScore] = useState(0)
  const[board, setBoard] = useState(null)
  useEffect(() => {
    initBoard();
  }, [])

  const initBoard = () => {
    let board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    board = generateBoard(generateBoard(board))
    setBoard(board)
    console.log('board', board)
  }


  const blankCoordinate = (board) =>{
    let blankCoord = []
    for (let r = 0; r< board.length; r++){
      for (let c=0; c<board[r].length; c++){
        if(board[r][c] ===0) blankCoord.push([r,c])
      }
    }
    return blankCoord
  }

  const generateBoard = (board) => {
    let blankCoordinates = blankCoordinate(board)
    let randomCoordinate = blankCoordinates[Math.floor(Math.random()*blankCoordinates.length)]
    console.log('randomCoordinate', randomCoordinate)
    let randomNumbers = generateRandomNumber()
    board[randomCoordinate[0]][randomCoordinate[1]] = randomNumbers

    return board
  }


  const generateRandomNumber = () => {
    let randomNumber = [2,4]
    let randomNum = randomNumber[Math.floor(Math.random()*randomNumber.length)]
    return randomNum
  }

  return (
    <div className="App">
      <h1>2048</h1>
      <p>Use buttons or arrow keys to play the game. Press 'N' to start a new game</p>
      <div className="button">New Game</div>
      <div className="buttons">
        <div className="button">Up</div>
        <div className="button">Right</div>
        <div className="button">Down</div>
        <div className="button">Left</div>
      </div>


        <div className="score"> Score: {score}</div>
        <table>
        </table>
    </div>
  );
}

export default App;
