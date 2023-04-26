import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import grayStar from '../../assets/grayStar.png'
import redStar from '../../assets/redStar.png'

const RatingWrapper = styled.div`
  display:flex;
  font-weight: 500;
  align-self: flex-end;
  justify-content: flex-end;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const Rate = styled.div`
  display: flex;
  align-items: center;
`

const StarImg = styled.img`
  margin-right: 5px;
  @media (max-width: 768px) {
    width: 13px;
    height: 13px;
  }
`

const StarInfo = () => {
  const { idGrid } = useParams()
  const logement = AppartementsDatas.find((product) => product.id === idGrid)
  const { rating } = logement

  const stars = new Array(5).fill(grayStar).fill(redStar, 0, rating)

  return (
    <RatingWrapper>
      <Rate>
        {stars.map((star, index) => (
          <StarImg
            src={star}
            alt={index < rating ? 'Etoile rouge' : 'Etoile grise'}
            key={index}
          />
        ))}
      </Rate>
    </RatingWrapper>
  )
}

export default StarInfo
