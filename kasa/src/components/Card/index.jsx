import styled from "styled-components"
import colors from "../../utils/style/colors"
import {Link} from "react-router-dom"

const CardContainer = styled.div`
    background-image: linear-gradient(to top, ${colors.secondary}, ${colors.primary});
    border-radius: 1rem;
    display: grid;
    align-items: end;
    width: 340px;
    height: 340px;
    margin: 20px;

    @media screen and (width <= 768px) { 
      width: 100%;
      height: 255px;
      margin: 20px 0px;
    }
`

const StyledTitle = styled.a`
    margin-inline-start: 0.5rem;
    margin-block-end: 0.5rem;
    padding: 10px;
    color: ${colors.gridBackgroundLight};
    font-size: 18px;
    text-decoration: none;
`

const Card = () => {
  return (
    <CardContainer>
        <Link to ="/flat">
            <StyledTitle>Titre de la location</StyledTitle>
        </Link>
    </CardContainer>
  )
}

export default Card