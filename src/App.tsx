import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect } from 'react'

import Home from './home'
import Disclaimer from './components/subpages/disclaimer'
import CompanyLetter from './components/subpages/companyletter'
import SalesLetter from './components/subpages/salesletter'
import Affiliate from './components/subpages/affiliate'
import Terms from './components/subpages/terms'
import Privacy from './components/subpages/privacy'
import Pricing from './components/subpages/pricing'
import Refund from './components/subpages/refund'
import Imprint from './components/subpages/imprint'

const App = () => {
  useEffect(() => {
    localStorage.setItem('Language', 'en')
  }, [])

  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/disclaimer" component={Disclaimer}></Route>
      <Route exact path="/companyletter" component={CompanyLetter}></Route>
      <Route exact path="/salesletter" component={SalesLetter}></Route>
      <Route exact path="/affilaite_agreement" component={Affiliate}></Route>
      <Route exact path="/terms_conditions" component={Terms}></Route>
      <Route exact path="/privacy_policy" component={Privacy}></Route>
      <Route exact path="/pricing_policy" component={Pricing}></Route>
      <Route exact path="/refund_policy" component={Refund}></Route>
      <Route exact path="/imprint" component={Imprint}></Route>

      <!-- Redirect to external pages -->
      <Route path='/shoutout' component={() => { 
       window.location.href = 'https://forms.gle/8rDk1uGN69661oJ17'; 
       return null;
      }}/>

    </Router>
  )
}

export default App
