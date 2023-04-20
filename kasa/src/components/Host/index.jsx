import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import colors from '../../utils/style/colors'

const Host = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.primary};
  width: 75%;
  align-items: center;
`

const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  object-fit: cover;
`

const HostInformation = () => {
  const { idGrid } = useParams()
  const logement = AppartementsDatas.find((product) => product.id === idGrid)
  const { host } = logement
  const { name, picture } = host
  return (
    <Host>
      {name}
      <HostImage src={picture} alt={name} />
    </Host>
  )
}

export default HostInformation
