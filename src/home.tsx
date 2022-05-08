import Navigation from './components/navigation'
import Header from './components/header'
import Charity from './components/charity'
import Team from './components/team'
import Academy from './components/academy'
import Tools from './components/tools'
import Paths from './components/paths'
import FAQ from './components/faq'
import Footer from './components/footer'
import './App.css'
import './i18n'

const App = () => {
  return (
    <div>
      <Navigation type={'main'} />
      <Header />
      <Academy />
      <Tools />
      <Paths />
      <Team />
      <Charity />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
