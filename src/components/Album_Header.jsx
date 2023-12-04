
import styled from 'styled-components'
import NewRealises from '../components/Album_New_Releases.jsx'
import FeaturedAlbums from '../components/Album_Feature.jsx'





  const FeaturedContainer = styled.div`
  display: grid;
  justify-content:center;
  grid-template-columns: auto auto auto;
grid-template-rows: auto auto;
  `
 const Headline = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height:30px;
  padding-left: 1rem;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color:black;
  color: red;
  margin: 2rem 0;
  grid-column: 1/4;
 grid-row: 1;
 
  `
    const FeaturedHeadline = styled.h3`
        font-size: 15px;
        font-weight: bold;
        line-height:20px;
        padding-left: 1rem;
        grid-column: 1/3;
        grid-row: 2;
        `
        const FeaturedAll = styled.p`
        font-size: 15px;
        color: red;
        grid-column: 3/4;
        grid-row: 2;
        `
  

export default function Album_Header() {
  return (
    <>
    
        
    <FeaturedContainer>
      <Headline>
            All Albums
        </Headline>
<FeaturedHeadline>
    Featured Albums
</FeaturedHeadline>
<FeaturedAll>Veiw All</FeaturedAll>

<FeaturedAlbums/>
    
    <NewRealises/>
    </FeaturedContainer>
    </>
  )
}
