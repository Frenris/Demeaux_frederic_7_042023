import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Coast from "../../assets/coast.jpg"

const BannerContainer = styled.div`
    position: relative;
    max-width: 100%;
    padding-inline: 2vw;
    background-image: url(${Coast});
    background-position: 0 -450px;
    background-size: cover;
    min-height: 223px;
    margin: auto;
    border-radius: 2rem;
    display: grid;
    place-items: center;
    color: ${colors.tertiary};
    margin-bottom: 2rem;
    &::before {
        position:absolute;
        content: "";
        inset: 0;
        opacity: 0.5;
        border-radius: 2rem;
    }
`

const StyledTitle = styled.h1`
  font-size: 48px;
`

function Banner() {
  return (
    <BannerContainer>
        <StyledTitle>
        Chez vous, partout et ailleurs
      </StyledTitle>
    </BannerContainer>
  )
}

export default Banner