import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles/footerStyle'

export default function Aboutus() {
  const { t } = useTranslation()
  const classes = useStyles()
  let companyLetters = ['/docs/CompanyLetter/EN.pdf', '/docs/CompanyLetter/DE.pdf']
  let salesLetters = ['/docs/SalesLetter/EN.pdf', '/docs/SalesLetter/DE.pdf']

  return (
    <div id="footer">
      <Grid className={classes.disclaimer}>
        <Grid className={classes.disclaimerGrid}>
          <Grid item xs={12} sm={6} className={classes.disclaimerDesc}>
            <Typography className={classes.disclaimerTextTitle}>{t('FOOTERDISCLAIMERTITLE')}</Typography>
            <Typography className={classes.disclaimerTextContent}>{t('FOOTERDISCLAIMERCONTENT')}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.disclaimerAvatar}>
            <Grid className={classes.avaterImgMain}>
              <img src="./img/logo.png" alt="footerImg" className={classes.footerImg} />
            </Grid>
            <Typography className={classes.avatarContent1}>{t('FOOTERICONTENT1')}</Typography>
            <Typography className={classes.avatarContent2}>{t('FOOTERICONTENT2')}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.footerSeperator}>
        <Grid className={classes.footerSepContent}>
          <Grid item xs={3} className={classes.footerInfo}>
            <img width="150" height="68" src="img/logo.png" alt="logo" />
            <Typography className={classes.avatarContent}>{t('FOOTERLOGOCONTENT1')}</Typography>
            <Typography className={classes.avatarContent}>{t('FOOTERLOGOCONTENT2')}</Typography>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fas fa-address-book"></i>&nbsp;{t('FOOTERCONTACT')}
            </Typography>
            <Typography className={classes.footerSepItemContent}>
              <i className="fas fa-envelope"></i>&nbsp;
              {t('FOOTERCONTACTEMAIL')}
            </Typography>
            <a href="/" className={classes.footerinstagram}>
              <i className="fab fa-instagram"></i>&nbsp;{t('FOOTERSOCIALINSTAGRAM')}
            </a>
          </Grid>
          <Grid item xs={3} className={classes.footerInfo}>
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
          <Grid item xs={3} className={classes.footerInfo}>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fad fa-award"></i>&nbsp;{t('FOOTERASSETS')}
            </Typography>
            <a href="/imprint">
              <Typography className={classes.footerItemLink}>{t('FOOTERIMPRINT')}</Typography>
            </a>
            <a href="/disclaimer">
              <Typography className={classes.footerItemLink}>{t('FOOTERDISCLAIMER')}</Typography>
            </a>
            <a
              href={localStorage.getItem('Language') == 'en' ? companyLetters[0] : companyLetters[1]}
              download="Company.pdf"
            >
              <Typography className={classes.footerItemLink}>{t('FOOTERCOMPANYLETTER')}</Typography>
            </a>
            <a href={localStorage.getItem('Language') == 'en' ? salesLetters[0] : salesLetters[1]} download="Sales.pdf">
              <Typography className={classes.footerItemLink}>{t('FOOTERSALESLETTER')}</Typography>
            </a>
            <a href="/agree">
              <Typography className={classes.footerItemLink}>{t('FOOTERAGREE')}</Typography>
            </a>
          </Grid>
          <Grid item xs={3} className={classes.footerInfo}>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fab fa-sourcetree"></i>&nbsp;{t('FOOTERRESOURCES')}
            </Typography>
            <a href="/terms">
              <Typography className={classes.footerItemLink}>{t('FOOTERTERMS')}</Typography>
            </a>
            <a href="/privacy">
              <Typography className={classes.footerItemLink}>{t('FOOTERPRIVACY')}</Typography>
            </a>
            <a href="/pricing">
              <Typography className={classes.footerItemLink}>{t('FOOTERPRICING')}</Typography>
            </a>
            <a href="/refund">
              <Typography className={classes.footerItemLink}>{t('FOOTERREFUND')}</Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.footerDesc}>
        <Typography className={classes.footerDescText}>{t('FOOTERDESC')}</Typography>
      </Grid>
    </div>
  )
}
