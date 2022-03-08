import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles/toolsStyle'

export default function Tools() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div id="tools" className={classes.mainContent}>
      <Grid>
        <svg
          viewBox="0 0 1000 20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={classes.svgMain}
        >
          <path
            className={classes.pathStyle}
            d="M 500, 20
               L 0, 6.1
               V 0 h 1000 v 6.1
               L 500, 20 z"
          />
        </svg>
      </Grid>
    </div>
  )
}
