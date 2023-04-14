import { Link } from 'react-router-dom'
import colors from './colors'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
  ${(props) =>
    props.$isFullLink &&
    `text-decoration: underline;`}
`