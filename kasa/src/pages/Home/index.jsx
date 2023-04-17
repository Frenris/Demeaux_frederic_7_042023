import Banner from "../../components/Banner"
import Grid from "../../components/Grid"
import styled from "styled-components"

const HomeWrapper = styled.div`
  justify-content: center;
  padding: 0 6rem;
  
  @media screen and (width <= 768px) {
    padding: 1.5rem 1rem;
    }

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
