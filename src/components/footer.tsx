import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles/footerStyle'

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
