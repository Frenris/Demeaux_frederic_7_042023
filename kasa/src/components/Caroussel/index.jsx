import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import AppartmentsDatas from '../../datas/appartments.json'
import Forward from '../../assets/right.png'
import Back from '../../assets/left.png'

const ContainerCaroussel = styled.div`
  position: relative;
  width: 100%;
  height: 415px;
  @media (max-width: 480px) {
    height: 255px;
    padding: 0rem 1.5rem;
  }
`
const ContentCaroussel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  scroll-bahavior: smooth;
  scroll-snap-type: x mandatory;
`

const ImgCaroussel = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: center;
  border-radius: 25px;
`

const Arrows = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
`

const ArrowLeft = styled(Arrows)`
  left: 20px;
`

const ArrowRight = styled(Arrows)`
  right: 20px;
`

const PicturesLength = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.tertiary};
  font-weight: 500;
  font-size: 18px;
`

const Caroussel = () => {
  const [current, setCurrent] = useState(0)

  const handleScroll = (e) => {
    const element = e.target
    const newIndex = Math.round(
      element.scrollLeft / (element.scrollWidth / AppartmentsDatas.length)
    )

    if (newIndex !== current) setCurrent(newIndex)
  }

  const moveToNext = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const moveToPrevious = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const { idGrid } = useParams()
  const logement = AppartmentsDatas.find((product) => product.id === idGrid)

  const length = logement?.pictures?.length || 0

  /* eslint-disable no-console */
  console.log(logement.pictures[current])
  /* eslint-enable no-console */

  return (
    <ContainerCaroussel>
      {length > 1 && (
        <ArrowLeft src={Back} alt="Flèche de gauche" onClick={moveToNext} />
      )}

      <ContentCaroussel id="caroussel" onScroll={handleScroll}>
        <ImgCaroussel
          src={logement.pictures[current]}
          alt="Photo appartement"
        />
      </ContentCaroussel>

      {length > 1 && (
        <ArrowRight src={Forward} alt="Right arrow" onClick={moveToPrevious} />
      )}

      <PicturesLength>
        {current + 1}/{length}
      </PicturesLength>
    </ContainerCaroussel>
  )
}

export default Caroussel
