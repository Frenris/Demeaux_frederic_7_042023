import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import colors from '../../utils/style/colors'

const Tags = styled.div`
    display: flex;
    color: ${colors.teriary};
    background: ${colors.primary};
`

const Tag = () => {
    const { idGrid } = useParams()
    const logement = AppartementsDatas.find((product) => product.id === idGrid)
    const { tag } = logement
    return (
      <Tags>
        { tag }
      </Tags>
    )
  }
  
  export default Tag