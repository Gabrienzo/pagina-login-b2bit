import styled from 'styled-components'
import EstilogsGlobais from './components/EstilosGlobais'
import Profile from './routes/profile'
import { RequireAuth } from './contexts/Auth/RequireAuth'

const Background = styled.div`
  background-color: #F1F5F9;
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


function App() {

    return (
        <Background>
            <EstilogsGlobais />
            <AppContainer>
              <RequireAuth>
                <Profile/>
              </RequireAuth>
            </AppContainer>
        </Background>
    )
}

export default App
