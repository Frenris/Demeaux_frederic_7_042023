import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import AppartmentsDatas from '../../datas/appartments.json'
import Forward from '../../assets/arrow_forward.svg'
import Back from '../../assets/arrow_back.svg'

const ContainerCaroussel = styled.div`
  position: relative;
  width: 100%;
  height: 415px;
`
const ContentCaroussel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  scroll-bahavior: smooth;
  scroll-snap-type: x mandatory;
`

const AppartementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  scroll-snap-align: start;
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
  const [setScrollPosition] = useState(0)

  const scrollHandle = (e) => {
    setScrollPosition(e.target.scrollLeft)
  }

  const moveToNext = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const moveToPrevious = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const { IdGrid } = useParams()
  const logement = AppartmentsDatas.find((product) => product.id === IdGrid)

  const length = logement?.pictures?.length || 0

  return (
    <ContainerCaroussel>
      {length > 1 && (
        <ArrowLeft src={Back} alt="Left arrow" onClick={moveToPrevious} />
      )}

      <ContentCaroussel id="caroussel" onScroll={scrollHandle}>
        {logement.pictures.map(
          (picture, index) =>
            index === current && (
              <AppartementImage
                key={picture}
                src={picture}
                alt="Photo logement"
              />
            )
        )}
      </ContentCaroussel>

      {length > 1 && (
        <ArrowRight src={Forward} alt="Right arrow" onClick={moveToNext} />
      )}

      <PicturesLength>
        {current + 1}/{length}
      </PicturesLength>
    </ContainerCaroussel>
  )
}

export default Caroussel
