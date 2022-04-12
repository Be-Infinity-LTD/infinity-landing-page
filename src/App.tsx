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

      <Route
        exact
        path="/shoutout"
        component={() => {
          window.location.href = 'https://forms.gle/8rDk1uGN69661oJ17'
          return null
        }}
      />

      <Route
        exact
        path="/disclaimer-download"
        component={() => {
          window.location.href = 'https://drive.google.com/uc?export=download&id=1ZfHQhi3FioElQ7XWfNkr169OW4pEvIf7'
          return null
        }}
      />

      <Route
        exact
        path="/de/geschäftspräsentation"
        component={() => {
          window.location.href = 'https://vimeo.com/640779875'
          return null
        }}
      />
      <Route
        exact
        path="/de/geschaeftspraesentation"
        component={() => {
          window.location.href = 'https://vimeo.com/640779875'
          return null
        }}
      />

      <Route
        exact
        path="/en/company-presentation"
        component={() => {
          window.location.href = 'https://vimeo.com/640979501'
          return null
        }}
      />

      <Route
        exact
        path="/en/compensation-plan-documentation"
        component={() => {
          window.location.href =
            'https://docs.google.com/document/d/171zeEdhDT0wp8IMg1eMHZaxJB7_oJET-0dlKPbhxaK0/edit?usp=sharing'
          return null
        }}
      />

      <Route
        exact
        path="/de/verguetungsplan-dokumentation"
        component={() => {
          window.location.href =
            'https://docs.google.com/document/d/171zeEdhDT0wp8IMg1eMHZaxJB7_oJET-0dlKPbhxaK0/edit?usp=sharing'
          return null
        }}
      />
    </Router>
  )
}

export default App
