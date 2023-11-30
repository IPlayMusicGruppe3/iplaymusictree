import styled from 'styled-components'

const  Album_New_ReleasesContainer = styled.div`
display: grid;

`

const Album_New_ReleasesHeadline =styled.h3`

`
const Album_New_ReleasesViewAll = styled.p``

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
    </Album_New_ReleasesContainer>
    </>
  )
}
