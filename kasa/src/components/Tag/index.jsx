import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import AppartementsDatas from '../../datas/appartments.json'
import colors from '../../utils/style/colors'

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0 10px 0;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

const Tag = styled.span`
  background: ${colors.primary};
  color: ${colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const TagInfo = () => {
  const { idGrid } = useParams()
  const logement = AppartementsDatas.find((product) => product.id === idGrid)
  const { tags } = logement
  return (
    <Tags>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Tags>
  )
}

export default TagInfo
