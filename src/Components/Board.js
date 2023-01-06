import React, { useState } from 'react'

import Square from './Square'

const Board = () => {

    const[state, setState]=useState(Array(9).fill(null));
 
    const[isXTurn, setIsXTurn] = useState(true);

    const handelClick = (index) =>{
if(state[index] != null ){
    return;
}

      const currState = [...state];
      currState[index] = isXTurn ? "X" : "0";
      setState(currState);
      setIsXTurn(!isXTurn);
    }

    const checkWinner =()=>{
          const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

          for(let i of winner){
            const[a,b,c] = i;
            if(state[a] !==null && state[a]===state[b]&& state[a]===state[c]){
                return state[a]; 
            }
                
        }
        return false;
    }
     
    const isWinner= checkWinner();

    const handleReset = ()=>{
        setState(Array(9).fill(null));
    }

    

  return (
    <div className='board-container'>
        {isWinner ? <><h2>Player {isWinner} Won the game</h2> 
         <button onClick={handleReset} >Play Again</button>
         </>: 
        <>
        <h3>Player {isXTurn ? "X" : "0"} please move</h3>
        <div className="board-row">
           <Square onClick={()=>handelClick(0)} value={state[0]}  />
           <Square  onClick={()=>handelClick(1)} value={state[1]}  />
           <Square onClick={()=>handelClick(2)} value={state[2]} />
        </div>
        <div className="board-row">
           <Square onClick={()=>handelClick(3)} value={state[3]} />
           <Square onClick={()=>handelClick(4)} value={state[4]} />
           <Square onClick={()=>handelClick(5)} value={state[5]} />
        </div>
        <div className="board-row">
           <Square onClick={()=>handelClick(6)} value={state[6]} />
           <Square onClick={()=>handelClick(7)} value={state[7]} />
           <Square onClick={()=>handelClick(8)} value={state[8]} />
        </div>
        <button onClick={handleReset} >Play Again</button>
        </>
        }
        
    </div>
  )
}

export default Board