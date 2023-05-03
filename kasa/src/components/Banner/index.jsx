import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Coast from '../../assets/coast.jpg'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BannerImage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 220px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${Coast});
  background-size: cover;
  background-position: center;
  border-radius: 25px;


  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    height: 111px;
    width: 100%;
    }
`

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: ${colors.tertiary};

  @media (max-width: 768px) {
    text-align: start;
    font-size: 36px;
    width: 80%;
    padding: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    text-align: start;
    font-size: 24px;
    width: 60%;
    padding: 0 1rem;
    }
`

function Banner() {
  return (
    <Section>
      <BannerImage>
        <StyledTitle>Chez vous, partout et ailleurs</StyledTitle>
      </BannerImage>
    </Section>
  )
}

export default Banner
