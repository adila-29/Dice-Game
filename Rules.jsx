import { styled } from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
         <h2>How to play dice game</h2>
         <div className="text">
        <p>Select any number</p>
        <p>Click on the dice image</p>
        <p>after clicking on the dice  if selected number is equal to dice number you will get the same point as the dice </p>
        <p>if you get a wrong guess then 2 points will be dedcuted. </p>
    </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
background-color: #FBF1F1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
max-width: 800px;
margin: 0 auto;
h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}
`