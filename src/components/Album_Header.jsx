
import styled from 'styled-components'
import Featured from '../components/Album_Featured.jsx'

const Album_HeaderContainer = styled.div`
max-width:400px;
display: grid;
padding-bottom:20px;
`

const Headline = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height:30px;
  color: red;
  `

  const FeaturedContainer = styled.div`
  display: grid;
  justify-content:center;
  grid-template-columns: 80px auto 80px;
grid-template-rows: 80px auto 120px;
  `
 
    const FeaturedHeadline = styled.h3`
        font-size: 20px;
        font-weight: bold;
        line-height:20px;
        grid-column: 1/3;
        grid-row: 1;
        `
        const FeaturedAll = styled.p`
        font-size: 15px;
        color: red;
        grid-column: 3/4;
        grid-row: 1;
        `
export default function Album_Header() {
  return (
    <>
    <Album_HeaderContainer>
        <Headline>
            All Albums
        </Headline>
    </Album_HeaderContainer>
    <FeaturedContainer>
<FeaturedHeadline>
    Featured Album
</FeaturedHeadline>
<FeaturedAll>Veiw All</FeaturedAll>
<Featured/>
    </FeaturedContainer>
    </>
  )
}
