import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/companyletterstyle'
import { Typography } from '@material-ui/core'

export default function CompanyLetter() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation />
      <Grid className={classes.mainGrid}>
      
      </Grid>
      <Footer />
    </Grid>
  )
}
