import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: '100px',
      paddingBottom: '150px',
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
    linkDiv: {
      textAlign: 'center',
      padding: '5%',
    },
    becomeMember: {
      fontSize: '25px',
      borderRadius: '30px',
      padding: '15px 25px',
      textTransform: 'uppercase',
      color: 'white',
      backgroundColor: 'rgb(139, 200, 247)',
      '&:hover': {
        backgroundColor: 'rgb(200, 200, 247)',
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(260deg, #FFFFFF 50%, #eef1f6 50%)',
      boxShadow: theme.shadows[5],
      padding: '4% 3%',
      borderRadius: '15px',
      margin: '0px 20%',
      '&:focus-visible': {
        outline: 'none',
      },
    },
    paperContent: {
      fontSize: '20px',
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontWeight: 600,
      color: 'black',
    },
    [theme.breakpoints.down('sm')]: {
      root: {
        padding: '50px 30px 150px 30px',
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
    [theme.breakpoints.down(550)]: {
      linkDiv: {
        padding: '10%',
      },
      becomeMember: {
        fontSize: '15px',
      },
      paper: {
        margin: '0px 10%',
      },
      paperContent: {
        fontSize: '15px',
      },
    },
  }),
)

export default function FAQ() {
  const classes = useStyles()
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const [openGetStart, setOpenGetStart] = React.useState(false)

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
  const handleGetStartOpen = () => {
    setOpenGetStart(true)
  }
  const handleGetStartClose = () => {
    setOpenGetStart(false)
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
      {/* rgb(139, 200, 247) */}
      <div className={classes.linkDiv}>
        <Button
          className={classes.becomeMember}
          variant="contained"
          // color="primary"
          component="span"
          onClick={handleGetStartOpen}
        >
          {t('BECOMEMEMBER')}&nbsp;
          <i className="fas fa-angle-double-right"></i>
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openGetStart}
        onClose={handleGetStartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openGetStart}>
          <div className={classes.paper}>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT1')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT2')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT3')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT4')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT5')}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
