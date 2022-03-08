import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContent: {
      backgroundColor: '#151515',
      transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
      paddingTop: '80px',
    },
    svgMain: {
      backgroundColor: '#f6f6f6',
    },
    pathStyle: {
      stroke: '#151515',
      fill: '#151515',
    },
  }),
)
