import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBottom: {
      backgroundColor: '#bdbdbd',
      borderTop: '1px solid #d0d0d0',
      padding: '15px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    disclaimer: {
      backgroundImage:
        'linear-gradient( rgba(75, 105, 121, 0.4), rgba(255, 255, 255, 0.4) ), url(img/landing/stock.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
      padding: '0% 10% 0% 10%',
      position: 'relative',
      left: '0px',
      display: 'flex',
      justifyContent: 'center',
    },
    disclaimerGrid: {
      boxShadow: '0px 0px 40px 5px rgb(0 0 0 / 20%)',
      transition: 'background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s',
      marginTop: '0px',
      marginBottom: '0px',
      padding: '30px 50px 30px 50px',
      zIndex: 10,
      position: 'relative',
      top: '-80px',
      borderRadius: '20px',
      display: 'flex',
      backgroundColor: 'white',
      maxWidth: '1200px',
    },
    disclaimerTextTitle: {
      textAlign: 'left',
      marginBottom: '20px',
      fontFamily: "'Raleway', arial, sans-serif",
      color: '#030303',
      fontSize: '30px',
      fontWeight: 600,
      letterSpacing: '1px',
    },
    disclaimerTextContent: {
      fontSize: '17px',
      fontWeight: 400,
      color: '#020202',
      fontFamily: "'Montserrat', sans-serif",
      marginBottom: '0px',
      lineHeight: '24px',
      letterSpacing: '0px',
      textAlign: 'justify',
    },
    disclaimerAvatar: {
      padding: '30px 20px 20px 20px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    avaterImgMain: {
      margin: '20px 0px 20px 0px',
      textAlign: 'center',
    },
    avatarContent1: {
      margin: '20px 0px 10px 0px',
      textAlign: 'center',
      color: '#030303',
      fontFamily: "'Aguafina Script', Sans-serif",
      fontSize: '22px',
      fontWeight: 600,
      textTransform: 'capitalize',
      letterSpacing: '5px',
    },
    avatarContent2: {
      marginBottom: '20px',
      textAlign: 'center',
      color: '#030303',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '30px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    footerSeperator: {
      backgroundImage:
        'linear-gradient( rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94) ), url(img/landing/footer-bg.jpg)',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    footerDesc: {
      paddingTop: '20px',
      paddingBottom: '20px',
      backgroundColor: 'white',
    },
    footerDescText: {
      textAlign: 'center',
      color: '#030303',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '14px',
      fontWeight: 600,
      letterSpacing: '1.8px',
    },
    footerSepContent: {
      padding: '50px 0px',
      marginLeft: '100px',
      marginRight: '100px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    avatarContent: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '14px',
      fontWeight: 500,
    },
    footerSepItemTitle: {
      color: '#333',
      marginBottom: '5px',
      position: 'relative',
      fontSize: '20px',
      fontWeight: 600,
      fontFamily: "'Montserrat', sans-serif",
      textAlign: 'left',
    },
    footerSepItemContent: {
      color: '#333',
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
    },
    footerinstagram: {
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
      color: '#333',
    },
    footerTitles: {
      padding: '0px 50px 20px 50px',
      display: 'flex',
    },
    footerItemCaption: {
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
      color: '#333',
      borderRight: '1px solid #333',
      paddingRight: '5px',
      width: '100px',
      textAlign: 'right',
    },
    footerItemText: {
      color: '#333',
      fontSize: '15px',
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      marginLeft: '30px',
    },
  }),
)

export default function Aboutus() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <div id="footer">
      <Grid className={classes.disclaimer}>
        <Grid className={classes.disclaimerGrid}>
          <Grid item xs={6}>
            <Typography className={classes.disclaimerTextTitle}>{t('FOOTERDISCLAIMERTITLE')}</Typography>
            <Typography className={classes.disclaimerTextContent}>{t('FOOTERDISCLAIMERCONTENT')}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.disclaimerAvatar}>
            <Grid className={classes.avaterImgMain}>
              <img src="./img/logo.png" alt="footerImg" />
            </Grid>
            <Typography className={classes.avatarContent1}>{t('FOOTERICONTENT1')}</Typography>
            <Typography className={classes.avatarContent2}>{t('FOOTERICONTENT2')}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.footerSeperator}>
        <Grid className={classes.footerSepContent}>
          <Grid item xs={3}>
            <img width="150" height="68" src="img/logo.png" alt="logo" />
            <Typography className={classes.avatarContent}>{t('FOOTERLOGOCONTENT1')}</Typography>
            <Typography className={classes.avatarContent}>{t('FOOTERLOGOCONTENT2')}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fas fa-map-marker-alt"></i>&nbsp;
              {t('FOOTERADDRESS')}
            </Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT1')}</Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT2')}</Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT3')}</Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT4')}</Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT5')}</Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT6')}</Typography>
            <Typography className={classes.footerSepItemContent}>{t('FOOTERADDRESSCONTENT7')}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fas fa-address-book"></i>&nbsp;{t('FOOTERCONTACT')}
            </Typography>
            <Typography className={classes.footerSepItemContent}>
              <i className="fas fa-envelope"></i>&nbsp;
              {t('FOOTERCONTACTEMAIL')}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fas fa-users"></i>&nbsp;{t('FOOTERSOCIALMEDIA')}
            </Typography>
            <Typography className={classes.footerSepItemContent}>
              <a href="/" className={classes.footerinstagram}>
                <i className="fab fa-instagram"></i>&nbsp;{t('FOOTERSOCIALINSTAGRAM')}
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.footerTitles}>
          <Typography className={classes.footerItemCaption}>{t('FOOTERASSETS')}</Typography>
          <Typography className={classes.footerItemText}>{t('FOOTERDISCLAIMER')}</Typography>
          <Typography className={classes.footerItemText}>{t('FOOTERLETTERS')}</Typography>
          <Typography className={classes.footerItemText}>{t('FOOTERAGREE')}</Typography>
          <Typography className={classes.footerItemText}>{t('FOOTERCOPY')}</Typography>
        </Grid>
        <Grid className={classes.footerTitles}>
          <Typography className={classes.footerItemCaption}>{t('FOOTERRESOURCES')}</Typography>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERTERMS')}
          </a>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERPRIVACY')}
          </a>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERPRICING')}
          </a>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERREFUND')}
          </a>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERCOOKIES')}
          </a>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERSPAM')}
          </a>
          <a href="/" className={classes.footerItemText}>
            {t('FOOTERPROCE')}
          </a>
        </Grid>
      </Grid>
      <Grid className={classes.footerDesc}>
        <Typography className={classes.footerDescText}>{t('FOOTERDESC')}</Typography>
      </Grid>
    </div>
  )
}
