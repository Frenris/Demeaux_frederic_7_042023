import Background from '../../assets/Background.jpg'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const AppartmentImg = styled.img`
  border-radius: 2rem;
  width: 100%;
  height: 20rem;
  object-fit: cover;
`

const AppartmentTitle = styled.h1`
  color: ${colors.primary};
`

function Appartment() {
  return (
    <AppartmentContainer>
      <AppartmentImg src={Background} alt="image de la gallerie" />
      <AppartmentTitle>
        <StyleTitle>Crazy loft on Canal Saint Martin</StyleTitle>
        <StyleSubtitle>Paris, ile de France</StyleSubtitle>
        <StyleTag>Cozy</StyleTag>
        <StyleTag>Canal</StyleTag>
        <StyleTag>Paris 10</StyleTag>
      </AppartmentTitle>
      <AppartmentOwner>
        <StyleOwnerTitle></StyleOwnerTitle>
        <OwnerBadge/>
        <OwnerStars>
          <span>☆</span>
          <span>☆</span> 
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </OwnerStars>
      </AppartmentOwner>
      <AppartmentDescription>
        <Description>

        </Description>
        <Equipments>

        </Equipments>
      </AppartmentDescription>
    </AppartmentContainer>
  )
}

export default Appartment
