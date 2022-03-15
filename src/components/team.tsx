import { useTranslation } from 'react-i18next'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Typography } from '@material-ui/core'

import { useStyles } from './styles/teamStyle'
import { teamMainImgs, teamSubMainImgs } from '../common/constant'

export default function Team() {
  const { t } = useTranslation()
  const classes = useStyles()
  let teamMainNames = ['PATRIK', 'DANIEL', 'ANDREAS']
  let teamSubMainNames = ['JOSEPH', 'FURKAN', 'ARTUR', 'HENRIK']
  let teamMainPos = ['PATRIKPOS', 'DANIELPOS', 'ANDREASPOS']
  let teamSubMainPos = ['JOSEPHPOS', 'FURKANPOS', 'ARTURPOS', 'HENRIKPOS']
  let teamMainInstagrams = ['PATRIKINSTAGRAM', 'DANIELINSTAGRAM', 'ANDREASINSTAGRAM']
  let teamSubMainInstagrams = ['JOSEPHINSTAGRAM', 'FURKANINSTAGRAM', 'ARTURINSTAGRAM', 'HENRIKINSTAGRAM']

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
            <CircularProgress variant="determinate" thickness={1} value={80} className={classes.hostCircle} />
            <Typography className={classes.hostLeadText}>{t('CHRISTIANLEAD')}</Typography>
          </div>
          <div className={classes.hostLead}>
            <CircularProgress variant="determinate" thickness={1} value={80} className={classes.hostCircle} />
            <Typography className={classes.hostLeadText}>{t('CHRISTIANTRACTION')}</Typography>
          </div>
          <div className={classes.hostLead}>
            <CircularProgress variant="determinate" thickness={1} value={80} className={classes.hostCircle} />
            <Typography className={classes.hostLeadText}>{t('CHRISTIANOTHER')}</Typography>
          </div>
        </Grid>
        <img src="./img/landing/teams/christian.png" alt="christiamImg" className={classes.avatarImg}></img>
      </Grid>
      <Grid>
        <Typography className={classes.teamMateTitle}>{t('TEAMMATETITLE')}</Typography>
        <Grid className={classes.mainTeamMate}>
          {teamMainNames.map((item, i) => (
            <Grid item sm={12} md={4} className={classes.teamMate} key={i}>
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
          ))}
        </Grid>
      </Grid>
      <Grid className={classes.subMainTeam}>
        {teamSubMainNames.map((item, i) => (
          <Grid item sm={12} md={3} className={classes.teamMate} key={i}>
            <Grid className={classes.avatarTeamMainDiv}>
              <img src={teamSubMainImgs[i]} alt={teamSubMainImgs[i]} className={classes.avatarTeamMain}></img>
            </Grid>
            <Grid className={classes.avatarTeamContent}>
              <Typography className={classes.mainTeamName}>{t(teamSubMainNames[i])}</Typography>
              <Typography className={classes.mainTeamPos}>{t(teamSubMainPos[i])}</Typography>
              <div className={classes.teamUnderLine}></div>
              <a href={t(teamSubMainInstagrams[i])}>
                <Grid className={classes.teamContactInfo}>
                  <InstagramIcon className={classes.teamInstagram} />
                </Grid>
              </a>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
