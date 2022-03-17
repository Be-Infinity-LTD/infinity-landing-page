import { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import ReactPlayer from 'react-player'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { useStyles } from './styles/charityStyle'
import { forestDocURL } from '../common/constant'

export default function Charity() {
  const classes = useStyles()
  const { t } = useTranslation()
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
  }
  const [isPlaying, setPlaying] = useState(true)
  const [loop, setLoop] = useState(true)

  const handleVideo = (e: any) => {
    setPlaying(!isPlaying)
    setLoop(!loop)

    e.preventDefault()
  }
  const handleDrag = (e: any) => {
    e.preventDefault()
  }

  const [items, setItems] = useState<any>([])

  useEffect(() => {
    setPlaying(isPlaying)
    setLoop(loop)
    let items_: any = [
      <div className="item" data-value="1" onDragStart={handleDrag}>
        <div>
          <ReactPlayer
            url="/video/fountain.mov"
            style={{ margin: '0px auto' }}
            playing={isPlaying}
            loop={loop}
            controls={true}
            width="100%"
            height="80%"
          />
          <Typography className={classes.fountainDesc}>{t('CHARITYCONTENT1')}</Typography>
        </div>
      </div>,
      <div className="item" data-value="2" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/forest.jpg" className={classes.forestImg} />
          <div className={classes.forestDownload}>
            <div className={classes.downloadIcon}>
              <a href={forestDocURL} download="madagascar_trees_certificate.pdf">
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>,
    ]
    setItems(items_)
  }, [isPlaying])
  return (
    <Grid id="charity" className={classes.charityContent}>
      <Grid item xs={12} sm={12} md={6} className={classes.leftContent}>
        <Typography className={classes.title}>{t('CHARITY')}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.rightContent}>
        <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy="alternate" />
      </Grid>
    </Grid>
  )
}
