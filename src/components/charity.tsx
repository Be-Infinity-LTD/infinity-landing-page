import { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import { useStyles } from './styles/charityStyle'

const zoomInAnimation = keyframes`${zoomIn}`
let ZoomInDiv = styled.div`
  animation: 1.5s ${zoomInAnimation};
`

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
  })

  const setCharityContent = () => {
    ZoomInDiv = styled.div`
      animation: 1.5s ${zoomInAnimation};
    `

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
