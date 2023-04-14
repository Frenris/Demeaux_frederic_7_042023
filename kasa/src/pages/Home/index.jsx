import Banner from "../../components/Banner"
import Grid from "../../components/Grid"
import styled from "styled-components"

const HomeWrapper = styled.div`
  justify-content: center;
  padding-inline: 2vw;
`

function Home() {
  return (
    <HomeWrapper>
        <Banner />
        <Grid /> 
    </HomeWrapper>
   
  )
}

export default Home
