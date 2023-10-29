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
        <Typography className={classes.subtitle}>VIP Addons by Furkan</Typography>
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Furkan - VIP Education</b>
            Price for one time purchase: $999.99
            Subscription-Period: one time purchase
            Package content:
            - 6 Live Coaching webinars useable within 6 Months
            - access to the VIP Volume Academy where the individual learns everything about:
            --- Brokerage, Assets, Futures
            --- Auctioning, Delta, Footprint, VWAP, Orderflow
            --- Psychology & Emotional Intelligence
            --- Statistics and its key role in decision making
            --- Proprietary Trading - how to get funded and most importantly, how to stay funded and cash out`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Furkan - 12 VIP Webinars Package</b>
            Price: $499.99
            Subscription-Period: 2 Months
            Serves as addon and requires the purchase of: “Furkan - VIP Education” to be available.
            Package content:
            - 12 Live Coaching calls useable within 2 Months
            - Webinar agenda is extending the contents of: “Furkan - VIP Education”`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Furkan - 24 VIP Webinars Package</b>
            Price: $949.99
            Subscription-Period: 4 Months
            Serves as addon and requires the purchase of: “Furkan - VIP Education” to be available.
            Package content:
            - 24 Live Coaching calls useable within 4 Months
            - Webinar agenda is extending the contents of: “Furkan - VIP Education”`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Furkan - 36 VIP Webinars Package</b>
            Price: $1299.99
            Subscription-Period: 6 Months
            Serves as addon and requires the purchase of: “Furkan - VIP Education” to be available.
            Package content:
            - 36 Live Coaching calls useable within 6 Months
            - Webinar agenda is extending the contents of: “Furkan - VIP Education”`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Furkan - 72 VIP Webinars Package</b>
            Price: $2499.99
            Subscription-Period: 12 Months
            Serves as addon and requires the purchase of: “Furkan - VIP Education” to be available.
            Package content:
            - 72 Live Coaching calls useable within 12 Months
            - Webinar agenda is extending the contents of: “Furkan - VIP Education”`,
          }}
        />
        <Typography className={classes.subtitle}>VIP Addons by Artur</Typography>
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Artur - VIP Education</b>
            Price for one time purchase: $999.99
            Subscription-Period: one time purchase
            Package content:
            - 6 Live Coaching webinars useable within 6 Months
            - access to the VIP Funded Account Academy where the individual learns everything about:
            --- Preparation for a Funded Account Challenge, from a beginner to a trader with a 6 figure account.
            --- Out of the job, into the trading world. How to register a business, what to look out for, etc.
            --- Expansion of the already existing Artur Basic Academy using the tool TradingView.`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Artur - 12 VIP Webinars Package</b>
            Price: $499.99
            Subscription-Period: 2 Months
            Serves as addon and requires the purchase of: “Artur - VIP Education” to be available.
            Package content:
            - 12 Live Coaching calls useable within 2 Months
            - Webinar agenda is extending the contents of: “Artur - VIP Education”`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Artur - 24 VIP Webinars Package</b>
            Price: $949.99
            Subscription-Period: 4 Months
            Serves as addon and requires the purchase of: “Artur - VIP Education” to be available.
            Package content:
            - 24 Live Coaching calls useable within 4 Months
            - Webinar agenda is extending the contents of: “Artur - VIP Education”`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Artur - 36 VIP Webinars Package</b>
            Price: $1299.99
            Subscription-Period: 6 Months
            Serves as addon and requires the purchase of: “Artur - VIP Education” to be available.
            Package content:
            - 36 Live Coaching calls useable within 6 Months
            - Webinar agenda is extending the contents of: “Artur - VIP Education”`,
          }}
        />
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Artur - 72 VIP Webinars Package</b>
            Price: $2499.99
            Subscription-Period: 12 Months
            Serves as addon and requires the purchase of: “Artur - VIP Education” to be available.
            Package content:
            - 72 Live Coaching calls useable within 12 Months
            - Webinar agenda is extending the contents of: “Artur - VIP Education”`,
          }}
        />
        <Typography className={classes.subtitle}>VIP Addons by Henrik</Typography>
        <Typography
          className={classes.contents}
          dangerouslySetInnerHTML={{
            __html: `<b>Henrik - Coinmastery</b>
        Price for one time purchase: $999.99
        Subscription-Period: one time purchase
        Package content:
        - access to the Coinmastery Academy for crypto fundamental analysis where the individual learns how to evauluate
        --- Research Tools
        --- Use Cases
        --- Team and Technology
        --- Tokenomics
        --- Updates and News
        --- Regulatory Compliance
        --- Community and Partnership
        --- Red Flags
        --- Targets`,
          }}
        />
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
            __html: `<b>Enneagramm Classification</b>
            Price for first purchase: $299.99
            Price continuous price: -
            Subscription-Period: one time
            Package content:
            - personality analysis
            - PDF with content concerning the personality type of the individual
            - access to the related video in order to guarantee that the individual is able to use the product conveniently

            <b>Enneagramm Starter</b>
            Price for first purchase: $999.99
            Price continuous price: $999.99
            Subscription-Period: 12 Live Coaching Calls, usable within max 3 month
            Package content:
            - personality analysis
            - PDF with content concerning the personality type of the individual
            - access to the related video in order to guarantee that the individual is able to use the product conveniently
            - access to the Ennea Scholars Academy where the individual learns how to use the method of profiling
            - access to live calls per week to establish the method of profiling
            - 12 Live Coaching Calls usable within max 6 month

            <b>Enneagramm Explorer</b>
            Price for first purchase: $1899.99
            Price continuous price: $1899.99
            Subscription-Period: 24 Live Coaching Calls, usable within max 6 month
            Package content:
            - personality analysis
            - PDF with content concerning the personality type of the individual
            - access to the related video in order to guarantee that the individual is able to use the product conveniently
            - access to the Ennea Scholars Academy where the individual learns how to use the method of profiling
            - access to live calls per week to establish the method of profiling
            - 24 Live Coaching Calls usable within max 6 month

            <b>Enneagramm Visonary</b>
            Price for first purchase: $2599.99
            Price continuous price: $2599.99
            Subscription-Period: 36 Live Coaching Calls, usable within max 6 month
            Package content:
            - personality analysis
            - PDF with content concerning the personality type of the individual
            - access to the related video in order to guarantee that the individual is able to use the product conveniently
            - access to the Ennea Scholars Academy where the individual learns how to use the method of profiling
            - access to live calls per week to establish the method of profiling
            -36 Live Coaching Calls usable within max 6 month

            <b>Enneagramm Pioneer</b>
            Price for first purchase: $4999.99
            Price continuous price: $4999.99
            Subscription-Period: 72 Live Coaching Calls, usable within max 6 month
            Package content:
            - personality analysis
            - PDF with content concerning the personality type of the individual
            - access to the related video in order to guarantee that the individual is able to use the product conveniently
            - access to the Ennea Scholars Academy where the individual learns how to use the method of profiling
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
            - personality analysis of the uploaded pictures (only one person per purchase)`,
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
