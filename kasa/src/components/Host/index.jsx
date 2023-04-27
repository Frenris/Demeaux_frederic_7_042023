import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import colors from '../../utils/style/colors'

const Host = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 40px;
  color: ${colors.primary};
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
`

const HostImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  object-fit: cover;
  margin-left: 10px;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

const HostInfo = () => {
  const { idGrid } = useParams()
  const logement = AppartementsDatas.find((product) => product.id === idGrid)
  const { host } = logement
  const { name, picture } = host
  const firstName = name.split(" ")[0]
  const lastName = name.split(" ")[1]

  /* eslint-disable no-console */
console.log(firstName);
console.log(lastName)
/* eslint-enable no-console */

  return (
    <Host>
      {firstName}<br/>{lastName}
      <HostImage src={picture} alt={name} />
    </Host>
  )
}

export default HostInfo
