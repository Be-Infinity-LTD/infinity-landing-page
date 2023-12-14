import { useTranslation } from 'react-i18next'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Typography } from '@material-ui/core'

import { useStyles } from './styles/teamStyle'
import { teamMainImgs, teamSubMainImgs1, teamSubMainImgs2 } from '../common/constant'

export default function Team() {
  const { t } = useTranslation()
  const classes = useStyles()
  let teamMainNames = ['', 'PATRIK', '']
  // let teamMainNames = ['PATRIK', 'DANIEL', 'ANDREAS']
  let teamSubMainNames1 = ['JOSEPH', 'FURKAN', 'ARTUR']
  let teamSubMainNames2 = ['FABIAN', 'HENRIK', '']
  let teamMainPos = ['DANIELPOS', 'PATRIKPOS', 'ANDREASPOS']
  let teamSubMainPos1 = ['JOSEPHPOS', 'FURKANPOS', 'ARTURPOS']
  let teamSubMainPos2 = ['FABIANPOS', 'HENRIKPOS', '']
  let teamMainInstagrams = ['DANIELINSTAGRAM', 'PATRIKINSTAGRAM', 'ANDREASINSTAGRAM']
  let teamSubMainInstagrams1 = ['JOSEPHINSTAGRAM', 'FURKANINSTAGRAM', 'ARTURINSTAGRAM']
  let teamSubMainInstagrams2 = ['FABIANINSTAGRAM', 'HENRIKINSTAGRAM', '']

  return (
    <div id="team" className={classes.main}>
      <Grid className={classes.host}>
        <Grid className={classes.hostDesc}>
          <Typography className={classes.hostTitle}>{t('TERMTITLE')}</Typography>
          <Typography className={classes.hostPos}>{t('CHRISTIANPOS')}</Typography>
        </Grid>
        <Typography className={classes.hostName}>{t('CHRISTIAN')}</Typography>
        <Typography className={classes.hostContent}>{t('CHRISTIANDESC')}</Typography>
        <Grid className={classes.hostSpec}>
          <div className={classes.hostLead}>
            <CircularProgress variant="determinate" thickness={1} value={95} className={classes.hostCircle} />
            <Typography className={classes.hostLeadText}>{t('CHRISTIANLEAD')}</Typography>
          </div>
          <div className={classes.hostLead}>
            <CircularProgress variant="determinate" thickness={1} value={95} className={classes.hostCircle} />
            <Typography className={classes.hostLeadText}>{t('CHRISTIANVISION')}</Typography>
          </div>
          <div className={classes.hostLead}>
            <CircularProgress variant="determinate" thickness={1} value={95} className={classes.hostCircle} />
            <Typography className={classes.hostLeadText}>{t('CHRISTIANFAIRNESS')}</Typography>
          </div>
        </Grid>
        <img src="./img/landing/teams/chrizandmara.png" alt="christiamImg" className={classes.avatarImg}></img>
        {/* <img src="./img/landing/teams/christian.png" alt="christiamImg" className={classes.avatarImg}></img> */}
      </Grid>
      <Grid>
        <Typography className={classes.teamMateTitle}>{t('TEAMMATETITLE')}</Typography>
        <Grid className={classes.mainTeamMate}>
          {teamMainNames.map((item, i) => {
            if (!teamMainNames[i]) {
              return (
                <Grid
                  item
                  sm={12}
                  //  md={4}
                  className={classes.teamMate}
                  key={i}
                ></Grid>
              )
            }
            return (
              <Grid item sm={12} className={classes.teamMate} key={i}>
                <Grid className={classes.avatarTeamMainDiv}>
                  <img src={teamMainImgs[i]} alt={teamMainImgs[i]} className={classes.avatarTeamMain}></img>
                </Grid>
                <Grid className={classes.avatarTeamContent}>
                  <Typography className={classes.mainTeamName}>{t(teamMainNames[i])}</Typography>
                  <Typography className={classes.mainTeamPos}>{t(teamMainPos[i])}</Typography>
                  <div className={classes.teamUnderLine}></div>
                  <a href={t(teamMainInstagrams[i])}>
                    <Grid className={classes.teamContactInfo}>
                      <InstagramIcon className={classes.teamInstagram} />
                    </Grid>
                  </a>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <Grid className={classes.subMainTeam1}>
        {teamSubMainNames1.map((item, i) => (
          <Grid item sm={12} className={classes.teamMate} key={i}>
            <Grid className={classes.avatarTeamMainDiv}>
              <img src={teamSubMainImgs1[i]} alt={teamSubMainImgs1[i]} className={classes.avatarTeamMain}></img>
            </Grid>
            <Grid className={classes.avatarTeamContent}>
              <Typography className={classes.mainTeamName}>{t(teamSubMainNames1[i])}</Typography>
              <Typography className={classes.mainTeamPos}>{t(teamSubMainPos1[i])}</Typography>
              <div className={classes.teamUnderLine}></div>
              <a href={t(teamSubMainInstagrams1[i])}>
                <Grid className={classes.teamContactInfo}>
                  <InstagramIcon className={classes.teamInstagram} />
                </Grid>
              </a>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid className={classes.subMainTeam2}>
        {teamSubMainNames2.map((item, i) => {
          if (item === '') {
            return (
              <Grid item sm={12} className={classes.teamMate} key={i}>
                {/* <div style={{ height: '383px' }} /> */}
              </Grid>
            )
          }
          return (
            <Grid item sm={12} className={classes.teamMate} key={i}>
              <Grid className={classes.avatarTeamMainDiv}>
                <img src={teamSubMainImgs2[i]} alt={teamSubMainImgs2[i]} className={classes.avatarTeamMain}></img>
              </Grid>
              <Grid className={classes.avatarTeamContent}>
                <Typography className={classes.mainTeamName}>{t(teamSubMainNames2[i])}</Typography>
                <Typography className={classes.mainTeamPos}>{t(teamSubMainPos2[i])}</Typography>
                <div className={classes.teamUnderLine}></div>
                <a href={t(teamSubMainInstagrams2[i])}>
                  <Grid className={classes.teamContactInfo}>
                    <InstagramIcon className={classes.teamInstagram} />
                  </Grid>
                </a>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
