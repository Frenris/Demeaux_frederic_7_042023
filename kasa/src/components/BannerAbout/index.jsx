import styled from 'styled-components'
import Land from '../../assets/land.jpg'

const BannerContainer = styled.div`
  width: 100%;
  height: 220px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url(${Land});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
`

function Banner() {
  return <BannerContainer />
}

export default Banner
