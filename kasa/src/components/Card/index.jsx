import styled from "styled-components"
import colors from "../../utils/style/colors"
import {Link} from "react-router-dom"

const CardContainer = styled.div`
    background-image: linear-gradient(to top, ${colors.secondary}, ${colors.primary});
    border-radius: 1rem;
    flex-basis: 30%;
    display: grid;
    align-items: end;
    min-width: 200px;
    min-height: 200px;
`

const StyledTitle = styled.div`
    width: 30%;
        margin-inline-start: 0.5rem;
        margin-block-end: 0.5rem;
        color: ${colors.gridBackgroundLight};
        font-size: 18px;
`

function Card() {
  return (
    <CardContainer>
        <div>
            <Link to ="/flat">
                <StyledTitle>Titre de la location</StyledTitle>
            </Link>
        </div>
    </CardContainer>
  )
}

export default Card