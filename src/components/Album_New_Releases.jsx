import styled from 'styled-components'
import NewAlbums from '../components/Album_New_Releases_Albums.jsx'

const  Album_New_ReleasesContainer = styled.div`
display: grid;
grid-template-columns: auto auto  auto;
grid-template-rows: auto auto auto;
justify-self:center;
justify-content:center;
grid-gap:20px;
margin: 0 auto;
`

const Album_New_ReleasesHeadline =styled.h3`
font-size: 15px;
font-weight: bold;

`
const Album_New_ReleasesViewAll = styled.p`
font-size: 15px;
color: red;
`



export default function Album_New_Releases() {
  return (
    <>
    <Album_New_ReleasesContainer>
<Album_New_ReleasesHeadline>
New Realises
</Album_New_ReleasesHeadline>
<Album_New_ReleasesViewAll>
    View All
</Album_New_ReleasesViewAll>
<NewAlbums/>
<NewAlbums/>
<NewAlbums/>
<NewAlbums/>

    </Album_New_ReleasesContainer>
    </>
  )
}
