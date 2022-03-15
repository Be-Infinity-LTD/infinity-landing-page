import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/termsstyles'

export default function Disclaimer() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation />
      Disclaimer
      <Footer />
    </Grid>
  )
}
