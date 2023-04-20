import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import grayStar from '../../assets/grayStar.png'
import redStar from '../../assets/redStar.png'

const Rate = styled.div`
  display: flex;
`

const StarRating = () => {
    const { idGrid } = useParams()
    const logement = AppartementsDatas.find((product) => product.id === idGrid)
    const { rating } = logement
    const stars = new Array(5).fill(grayStar).fill(redStar, 0, rating)
    return (
      <Rate>
        
      </Rate>
    )
  }
  
  export default StarRating