import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useStyles } from './styles/philosophyStyle'

export default function Philosophy() {
  const { t } = useTranslation()
  const classes = useStyles()

  const [opt1, setOpt1] = useState(true)
  const [opt2, setOpt2] = useState(false)
  const [opt3, setOpt3] = useState(false)
  const [opt4, setOpt4] = useState(false)
  const [opt5, setOpt5] = useState(false)
  const [opt6, setOpt6] = useState(false)

  const handleOptBtn1 = () => {
    setOpt1(true)
    setOpt2(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
  }
  const handleOptBtn2 = () => {
    setOpt1(false)
    setOpt2(true)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    setOpt6(false)
  }
  const handleOptBtn3 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(true)
    setOpt4(false)
    setOpt5(false)
    setOpt6(false)
  }
  const handleOptBtn4 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(true)
    setOpt5(false)
    setOpt6(false)
  }
  const handleOptBtn5 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(true)
    setOpt6(false)
  }
  const handleOptBtn6 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    setOpt6(true)
  }

  return (
    <div id="philosophy" className={classes.textCenter}>
      <Grid>
        <svg
          viewBox="0 0 1000 20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={classes.svgMainUp}
        >
          <path
            className={classes.pathStyleUp}
            d="M 500, 20
               L 0, 6.1
               V 0 h 1000 v 6.1
               L 500, 20 z"
          />
        </svg>
      </Grid>
      <Grid className={classes.mainContent}>
        <div className={classes.contentImgAndText}>
          <Grid item sm={12} md={6} className={classes.contentGridText}>
            <Grid className={classes.contentTextTitle}>{t('PHILOSOPHYDESCTITLE')}</Grid>
            <Grid className={classes.contentTextContext1}>{t('PHILOSOPHYDESCCONTENT1')}</Grid>
            <Grid className={classes.contentTextContext1}>{t('PHILOSOPHYDESCCONTENT2')}</Grid>
            <Grid className={classes.contentTextContext2}>{t('PHILOSOPHYDESCCONTENT3')}</Grid>
          </Grid>
          <Grid item sm={12} md={6} className={classes.contentGridImg}>
            <img src="./img/landing/philosopydesc.jpg" alt="contentImg" className={classes.contentImg} />
          </Grid>
        </div>
      </Grid>

      <Grid className={classes.mainContent}>
        <div className={classes.contentImgAndText}>
          <Grid item sm={12} md={6} className={classes.contentGridImg}>
            <img src="./img/landing/philosophy.jpg" alt="contentImg" className={classes.contentImg} />
          </Grid>
          <Grid item sm={12} md={6} className={classes.contentGridText}>
            <Grid className={classes.contentTextTitle}>{t('PHILOSOPHYTITLE')}</Grid>
            <Grid className={classes.contentTextContext1}>{t('PHILOSOPHYCONTENT1')}</Grid>
            <Grid className={classes.contentTextContext2}>{t('PHILOSOPHYCONTENT2')}</Grid>
          </Grid>
        </div>
      </Grid>
      <Grid className={classes.philosophyOptions}>
        <Grid container className={classes.philosophyOptionsBtn}>
          <Grid
            item
            sm={12}
            md={2}
            id="optBtn1"
            className={opt1 ? classes.philosophyOptionsBtnGridActive : classes.philosophyOptionsBtnGrid}
            onMouseOver={handleOptBtn1}
          >
            <div
              id="optBtnItem1"
              className={opt1 ? classes.philosophyOptionsBtnItemActive : classes.philosophyOptionsBtnItem}
            >
              {t('PHILOSOPHYBTNNAME1')}
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            id="optBtn2"
            className={opt2 ? classes.philosophyOptionsBtnGridActive : classes.philosophyOptionsBtnGrid}
            onMouseOver={handleOptBtn2}
          >
            <div
              id="optBtnItem2"
              className={opt2 ? classes.philosophyOptionsBtnItemActive : classes.philosophyOptionsBtnItem}
            >
              {t('PHILOSOPHYBTNNAME2')}
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            id="optBtn3"
            className={opt3 ? classes.philosophyOptionsBtnGridActive : classes.philosophyOptionsBtnGrid}
            onMouseOver={handleOptBtn3}
          >
            <div
              id="optBtnItem3"
              className={opt3 ? classes.philosophyOptionsBtnItemActive : classes.philosophyOptionsBtnItem}
            >
              {t('PHILOSOPHYBTNNAME3')}
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            id="optBtn4"
            className={opt4 ? classes.philosophyOptionsBtnGridActive : classes.philosophyOptionsBtnGrid}
            onMouseOver={handleOptBtn4}
          >
            <div
              id="optBtnItem4"
              className={opt4 ? classes.philosophyOptionsBtnItemActive : classes.philosophyOptionsBtnItem}
            >
              {t('PHILOSOPHYBTNNAME4')}
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            id="optBtn5"
            className={opt5 ? classes.philosophyOptionsBtnGridActive : classes.philosophyOptionsBtnGrid}
            onMouseOver={handleOptBtn5}
          >
            <div
              id="optBtnItem5"
              className={opt5 ? classes.philosophyOptionsBtnItemActive : classes.philosophyOptionsBtnItem}
            >
              {t('PHILOSOPHYBTNNAME5')}
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={2}
            id="optBtn6"
            className={opt6 ? classes.philosophyOptionsBtnGridActive : classes.philosophyOptionsBtnGrid}
            onMouseOver={handleOptBtn6}
          >
            <div
              id="optBtnItem6"
              className={opt6 ? classes.philosophyOptionsBtnItemActive : classes.philosophyOptionsBtnItem}
            >
              {t('PHILOSOPHYBTNNAME6')}
            </div>
          </Grid>
        </Grid>
        <Grid>
          {opt1 ? (
            <Grid className={classes.philosophyOptionsContent} id="optContent1">
              {t('PHILOSOPHYBTNCONTENT1')}
            </Grid>
          ) : (
            <></>
          )}
          {opt2 ? (
            <Grid className={classes.philosophyOptionsContent} id="optContent2">
              {t('PHILOSOPHYBTNCONTENT2')}
            </Grid>
          ) : (
            <></>
          )}
          {opt3 ? (
            <Grid className={classes.philosophyOptionsContent} id="optContent3">
              {t('PHILOSOPHYBTNCONTENT3')}
            </Grid>
          ) : (
            <></>
          )}
          {opt4 ? (
            <Grid className={classes.philosophyOptionsContent} id="optContent4">
              {t('PHILOSOPHYBTNCONTENT4')}
            </Grid>
          ) : (
            <></>
          )}
          {opt5 ? (
            <Grid className={classes.philosophyOptionsContent} id="optContent5">
              {t('PHILOSOPHYBTNCONTENT5')}
            </Grid>
          ) : (
            <></>
          )}
          {opt6 ? (
            <Grid className={classes.philosophyOptionsContent} id="optContent6">
              {t('PHILOSOPHYBTNCONTENT6')}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
