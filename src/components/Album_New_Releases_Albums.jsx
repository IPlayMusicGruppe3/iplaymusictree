import styled from 'styled-components'
import FeatureIcone from '../images/NewFeatureIcone1.svg'



const New_ReleasesAlbumContainer = styled.div`
display: flex;
justify-content: center;
grid-column:1/-1;` 

const New_ReleasesAlbumCover = styled.img`
width: 50px;
height: auto;
grid-column: 1/2;
grid-row: 2;
`

const New_ReleasesDetails= styled.div`
width: 100%;
`

const New_ReleasesAlbumTitle = styled.h3`
display: block;
font-weight: bold;
`

const New_ReleasesAlbumArtist = styled.p`
display: block;

`

const New_ReleasesAlbumDuration = styled.p`
font-size: 12px;
`
export default function Album_New_Releases_Albums() {
  return (
    
<New_ReleasesAlbumContainer>
<New_ReleasesAlbumCover src={FeatureIcone}/>

<New_ReleasesDetails>
<New_ReleasesAlbumTitle>
Death Race For Love
</New_ReleasesAlbumTitle>
<New_ReleasesAlbumArtist>
Juice WRLD
</New_ReleasesAlbumArtist>
</New_ReleasesDetails>



<New_ReleasesAlbumDuration>
11 song

</New_ReleasesAlbumDuration>
</New_ReleasesAlbumContainer>
  )
}
