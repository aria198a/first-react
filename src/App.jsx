import './reset.css'
import './base.scss'
import { AppContextProvier } from 'context/AppContext'
// ---
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'

// ---
function App () {
  return (
    <AppContextProvier>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContextProvier>
  )
}

export default App
