import styled from 'styled-components'
import cover2 from '../images/pexels-photo-1.svg'
import cover3 from '../images/pexels-photo-2.svg'
import cover1 from '../images/pexels-photo-3.svg'

const FeaturedAlbumContainer = styled.div`
display: flex;
justify-content: center;
grid-column:1/-1;
grid-row: 2;
max-height: 130px;
margin: 2rem 0;

`
const FeaturedAlbumCover = styled.img`
width: 100%;
height: auto;

`
export default function Album_Feature() {
  return (
    <>
    <FeaturedAlbumContainer >
<FeaturedAlbumCover src={cover1}/>
<FeaturedAlbumCover src={cover2}/>
<FeaturedAlbumCover src={cover3}/>

    </FeaturedAlbumContainer>
    
    
    </>
  )
}
