import { useState } from "react"
import { styled } from "styled-components"


const Rolldice = ({rollDice,currentDice}) => {
    
  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice_${currentDice}.png`}/>
        </div>
        <p>Click on the Dice to roll.</p>

    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
    font-weight: 500;
font-size: 24px;
}
.dice{
    cursor: pointer;
}
.reset{

}
`