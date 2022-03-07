import { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const zoomInAnimation = keyframes`${zoomIn}`
const ZoomInDiv = styled.div`
  animation: 1.5s ${zoomInAnimation};
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      position: 'relative',
    },
    colorBack: {
      backgroundColor: '#515151',
      opacity: '0.58',
      height: '85%',
    },
    charityContent: {
      display: 'flex',
      justifyContent: 'center',
      padding: '60px',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    leftContent: {
      minHeight: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px 20px',
    },
    title: {
      color: '#FFFFFF',
      fontFamily: "'Playfair Display', Sans-serif",
      fontSize: '80px',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '7px',
      textShadow: '0px 0px 10px rgb(255 221 160 / 50%)',
      wordBreak: 'break-all',
      textAlign: 'center',
    },
    rightContent: {
      backgroundColor: '#FFFFFF1F',
      padding: '60px',
      borderRadius: '20px',
      minHeight: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    charityContent1: {
      color: '#FFFFFF',
      fontFamily: "'Montserrat', Sans-serif",
      fontSize: '45px',
      fontWeight: 600,
      textAlign: 'center',
      marginBottom: '15px',
    },
    charityContent2: {
      color: '#FFFFFF',
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontSize: '20px',
      fontWeight: 300,
      textAlign: 'center',
    },
  }),
)

export default function Charity() {
  const classes = useStyles()
  const { t } = useTranslation()
  const charityTitle = ['CHARITYTITLE1', 'CHARITYTITLE2']
  const charityContent = ['CHARITYCONTENT1', 'CHARITYCONTENT2']
  const [curCharityTitle, setCurCharityTitle] = useState(charityTitle[0])
  const [curCharityContent, setCurCharityContent] = useState(charityContent[0])
  let curIndex = 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCharityContent()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const setCharityContent = () => {
    curIndex++
    if (curIndex > charityTitle.length - 1) curIndex = 0

    setCurCharityTitle(charityTitle[curIndex])
    setCurCharityContent(charityContent[curIndex])
  }

  return (
    <div id="charity" className={classes.mainContainer}>
      <div>
        <Grid className={classes.colorBack}></Grid>
      </div>
      <Grid className={classes.charityContent}>
        <Grid item xs={6} className={classes.leftContent}>
          <Typography className={classes.title}>{t('CHARITY')}</Typography>
        </Grid>
        <Grid item xs={6} className={classes.rightContent}>
          <div>
            {curCharityTitle.length > 0 ? (
              <>
                <ZoomInDiv className={classes.charityContent1}>{t(curCharityTitle)}</ZoomInDiv>
                <ZoomInDiv className={classes.charityContent2}>{t(curCharityContent)}</ZoomInDiv>
              </>
            ) : (
              <></>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
