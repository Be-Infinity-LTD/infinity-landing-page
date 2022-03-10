import Navigation from './components/navigation'
import Header from './components/header'
import Philosophy from './components/philosophy'
import Charity from './components/charity'
import Community from './components/community'
import Academy from './components/academy'
import Tools from './components/tools'
import Paths from './components/paths'
import FAQ from './components/faq'
import Aboutus from './components/aboutus'
import Footer from './components/footer'
import './App.css'
import './i18n'

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Philosophy />
      <Charity />
      <Community />
      <Academy />
      <Tools />
      <Paths />
      <FAQ />
      <Aboutus />
      <Footer />
    </div>
  )
}

export default App
