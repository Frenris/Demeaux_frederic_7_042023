import styled from "styled-components"
import colors from "../../utils/style/colors"
import Card from "../Card/index"

const GridContainer = styled.div`
    background-color: ${colors.gridBackgroundDark};
    min-height: 50vh;
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    justify-content: space-between;
`

function Grid() {
  return (
    <GridContainer>
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </GridContainer>
    
  )
}

export default Grid