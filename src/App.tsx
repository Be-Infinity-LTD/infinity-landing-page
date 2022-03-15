import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/disclaimer" component={Disclaimer}></Route>
      <Route exact path="/companyletter" component={CompanyLetter}></Route>
      <Route exact path="/salesletter" component={SalesLetter}></Route>
      <Route exact path="/agree" component={Affiliate}></Route>
      <Route exact path="/terms" component={Terms}></Route>
      <Route exact path="/privacy" component={Privacy}></Route>
      <Route exact path="/pricing" component={Pricing}></Route>
      <Route exact path="/refund" component={Refund}></Route>
      <Route exact path="/imprint" component={Imprint}></Route>
    </Router>
  )
}

export default App
