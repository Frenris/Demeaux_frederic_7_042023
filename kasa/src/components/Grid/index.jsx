import styled from "styled-components"
import colors from "../../utils/style/colors"
import Card from "../Card/index"

const GridContainer = styled.div`
    background-color: ${colors.gridBackgroundLight};
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin: 30px 0;
    justify-content: space-between;

    @media screen and (width <= 768px) {
        justify-content: center;
        background-color: ${colors.tertiary};
        padding: 0;
    }
`

const Grid = () => {
  return (
    <GridContainer>
        <Card />
        <Card />
        <Card />
        <Card />
    </GridContainer>
    
  )
}

export default Grid