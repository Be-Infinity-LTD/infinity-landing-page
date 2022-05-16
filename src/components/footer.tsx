import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { useStyles } from './styles/footerStyle'
import { legalLetters, salesLetters } from '../common/constant'

export default function Aboutus() {
  const { t } = useTranslation()
  const classes = useStyles()

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
            <Grid className={classes.footerLogo}>
              <img width="150" height="68" src="img/logo.png" alt="logo" />
            </Grid>

            <Typography className={classes.avatarContent}>{t('FOOTERLOGOCONTENT1')}</Typography>
            <Typography className={classes.avatarContent}>{t('FOOTERLOGOCONTENT2')}</Typography>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fas fa-address-book"></i>&nbsp;{t('FOOTERCONTACT')}
            </Typography>
            <Typography className={classes.footerSepItemContent}>
              <i className="fas fa-envelope"></i>&nbsp;
              {t('FOOTERCONTACTEMAIL')}
            </Typography>
            <a href="https://www.instagram.com/be_infinity_official/" className={classes.footerinstagram}>
              <i className="fab fa-instagram"></i>&nbsp;{t('FOOTERSOCIALINSTAGRAM')}
            </a>
            <br />
            <a href="https://www.facebook.com/Infinity-101236431830495" className={classes.footerinstagram}>
              <i className="fab fa-facebook"></i>&nbsp;{t('FOOTERSOCIALFACEBOOK')}
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
              href={localStorage.getItem('Language') === 'en' ? legalLetters[0] : legalLetters[1]}
              download="Legal.pdf"
            >
              <Typography className={classes.footerItemLink}>{t('FOOTERLEGALLETTER')}</Typography>
            </a>
            <a
              href={localStorage.getItem('Language') === 'en' ? salesLetters[0] : salesLetters[1]}
              download="Sales.pdf"
            >
              <Typography className={classes.footerItemLink}>{t('FOOTERSALESLETTER')}</Typography>
            </a>
            <a href="/affilaite_agreement">
              <Typography className={classes.footerItemLink}>{t('FOOTERAGREE')}</Typography>
            </a>
          </Grid>
          <Grid item xs={3} className={classes.footerInfo}>
            <Typography className={classes.footerSepItemTitle}>
              <i className="fab fa-sourcetree"></i>&nbsp;{t('FOOTERRESOURCES')}
            </Typography>
            <a href="/terms_conditions">
              <Typography className={classes.footerItemLink}>{t('FOOTERTERMS')}</Typography>
            </a>
            <a href="/privacy_policy">
              <Typography className={classes.footerItemLink}>{t('FOOTERPRIVACY')}</Typography>
            </a>
            <a href="/pricing_policy">
              <Typography className={classes.footerItemLink}>{t('FOOTERPRICING')}</Typography>
            </a>
            <a href="/refund_policy">
              <Typography className={classes.footerItemLink}>{t('FOOTERREFUND')}</Typography>
            </a>
            <a
              href="https://docs.google.com/document/d/171zeEdhDT0wp8IMg1eMHZaxJB7_oJET-0dlKPbhxaK0/edit#"
              target="_blank"
              rel="noreferrer"
            >
              <Typography className={classes.footerItemLink}>{t('FOOTERCOMPLAN')}</Typography>
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
