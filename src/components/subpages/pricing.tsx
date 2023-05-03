import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { useStyles } from './styles/pricingstyle'
import { Typography } from '@material-ui/core'

export default function Pricing() {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid>
      <Navigation type={'submenu'} />
      <Grid className={classes.mainGrid}>
        <Typography className={classes.largeTitle}>{t('FOOTERPRICING')}</Typography>
        <Typography className={classes.title}>{t('PRICINGTITLE1')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE1-1')}</Typography>

        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>1)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-1')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>2)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-2')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>3)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-3')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>4)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-4')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>5)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-5')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>6)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-6')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>7)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-7')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>8)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-1-8')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>9)</Typography>
          <Typography className={classes.itemContent}>
            Social Media Basic = basic knowledge to improve social media presence
          </Typography>
        </Grid>

        <Typography className={classes.subtitle}>{t('PRICINGTITLE1-2')}</Typography>

        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>1)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-2-1')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>2)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-2-2')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>3)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-2-3')}</Typography>
        </Grid>
        <Grid className={classes.item}>
          <Typography className={classes.itemNumber}>4)</Typography>
          <Typography className={classes.itemContent}>{t('PRICINGCONTENT1-2-4')}</Typography>
        </Grid>

        <Typography className={classes.title}>{t('PRICINGTITLE2')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-1')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-1')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-2')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-2')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-3')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-3')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-4')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-4')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-5')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-5')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-6')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-6')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-7')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-7')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE2-8')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT2-8')}</Typography>

        {/* <Typography className={classes.title}>{t('PRICINGTITLE3')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT3')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE3-1')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT3-1')}</Typography> */}
        <Typography className={classes.title}>Basic Addons</Typography>
        <Typography className={classes.contents}>Addons can be purchased additionaly to the “Basic” Plans.</Typography>
        <Typography className={classes.subtitle}>Social Media Advanced</Typography>
        <Typography className={classes.contents}>
          {`Price for first purchase: $4399,99 
          Subscription-Period: one time purchase without expiration.
          Package content:
          
          – over 150 Videos 
          - In depth social media platform knowledge 
          – Instagram Academy 
          – Tiktok Academy 
          – Youtube Academy 
          - Pinterest Academy`}
        </Typography>
        <Typography className={classes.subtitle}>Ennea Schoolars Academy</Typography>
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `Ennea Scholars Academy where the individual learns how to use the method of profiling
          - access to live calls per week to establish the method of profiling
          - 72 Live Coaching Calls usable within max 6 month

          <b>Enneagramm Master</b> ( On Request Only )
          Price for first purchase: $8999.99
          Price continuous price: $8999.99
          Subscription-Period: 72 Live Coaching Calls + 1 weekly Masterclass call with 3-6 people max for 6 month, usable within max 6 month
          Package content:
          - personality analysis
          - PDF with content concerning the personality type of the individual
          - access to the related video in order to guarantee that the individual is able to use the product conveniently
          - access to the Ennea Scholars Academy where the individual learns how to use the method of profiling
          - access to live calls per week to establish the method of profiling
          - 72 Live Coaching Calls usable within max 6 month
          - 1 weekly Masterclass call with 3-6 people max for 6 month, usable within max 6 month

          <b>Enneagramm Profiling</b> (There is an undefined maximum per week. Once this limit is reached, the product can only be booked again after approval.)
          Price for first purchase: $9.99
          Price continuous price: $9.99
          Subscription-Period: onetime
          Package content:
          - personality analysis of the uploaded pictures (only one person per purchase)
          `,
          }}
        />
        <Typography className={classes.title}>{t('PRICINGTITLE4')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT4')}</Typography>

        <Typography className={classes.title}>{t('PRICINGTITLE5')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT5')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE5-1')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT5-1')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE5-2')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT5-2')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE5-3')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT5-3')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE5-4')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT5-4')}</Typography>
        <Typography className={classes.subtitle}>{t('PRICINGTITLE5-5')}</Typography>
        <Typography className={classes.contents}>{t('PRICINGCONTENT5-5')}</Typography>

        <Typography className={classes.title}>Custom Plans</Typography>
        {/* <Typography className={classes.contents}>
           
        </Typography> */}
        <Typography className={classes.subtitle}>Need More?</Typography>
        <Typography className={classes.contents}>
          If you are looking for an enterprise experience, custom tailored to you and your business feel free to reach
          out to our support:
          <a href="mailto:support@be-infinity.com">support@be-infinity.com</a> and let us know what you have in mind.
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  )
}
