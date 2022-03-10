import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: '100px',
    },
    faqTitle: {
      marginBottom: '30px',
      color: 'black',
      fontSize: '48px',
      textAlign: 'center',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 600,
      textShadow: '0px 0px 10px rgb(0 0 0 / 50%)',
      textTransform: 'uppercase',
      letterSpacing: '10px',
    },
    heading: {
      fontFamily: "'Spartan', Sans-serif",
      fontSize: '20px',
      fontWeight: 600,
      textAlign: 'left',
    },
    secondaryHeading: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontSize: '18px',
      fontWeight: 400,
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        padding: '100px 50px',
      },
      faqTitle: {
        fontSize: '35px',
      },
      heading: {
        fontSize: '15px',
      },
      secondaryHeading: {
        fontSize: '14px',
      },
    },
  }),
)

export default function FAQ() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const faqItemTitles = [
    'FAQFIRTITLE',
    'FAQSECTITLE',
    'FAQTHITITLE',
    'FAQFOURTITLE',
    'FAQFIVTITLE',
    'FAQSIXTITLE',
    'FAQSEVTITLE',
    'FAQEIGTITLE',
  ]
  const faqItemContents = [
    'FAQFIRCONTENT',
    'FAQSECCONTENT',
    'FAQTHICONTENT',
    'FAQFOURCONTENT',
    'FAQFIVCONTENT',
    'FAQSIXCONTENT',
    'FAQSEVCONTENT',
    'FAQEIGCONTENT',
  ]
  const faqPanels = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6', 'panel7', 'panel8']

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div id="faq" className={classes.root}>
      <Typography className={classes.faqTitle}>FAQ</Typography>
      {faqPanels.map((item, i) => (
        <Accordion expanded={expanded === item} onChange={handleChange(item)} key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{t(faqItemTitles[i])}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.secondaryHeading}>{t(faqItemContents[i])}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
