import styled from "styled-components";

const TotalScore = ({score}) => {
    
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
//text-align: center;
align-items: center;
padding: 0px;
display: flex;
flex-direction: column;
margin-left: 40px;

h1{
    font-size: 100px;
    line-height: 36px;
    
}
p{
    font-size: 24px;
    font-weight: 500px;
    margin-top: 1px;
}

`;