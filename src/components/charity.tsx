import { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
// import ReactPlayer from 'react-player'
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
  const [isPlaying, setPlaying] = useState(false)
  const [loop, setLoop] = useState(true)

  const handleDrag = (e: any) => {
    e.preventDefault()
  }

  const [items, setItems] = useState<any>([])

  useEffect(() => {
    setPlaying(isPlaying)
    setLoop(loop)

    let itemsTemp: any = [
      // <div className="item" data-value="1" onDragStart={handleDrag}>
      //   <div>
      //     <ReactPlayer
      //       url="/video/fountain.mov"
      //       style={{ margin: '0px auto' }}
      //       playing={isPlaying}
      //       loop={loop}
      //       controls={true}
      //       width="100%"
      //       height="80%"
      //     />
      //     <Typography className={classes.fountainDesc}>{t('CHARITYCONTENT1')}</Typography>
      //   </div>
      // </div>,
      <div className="item" data-value="1" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/forest.jpg" className={classes.forestImg} alt="forest" />
          <div className={classes.forestDownload}>
            <Typography className={classes.forestDesc}>{t('CHARITYCONTENT2')}</Typography>
            <div className={classes.downloadIcon}>
              <a href={forestDocURL} download="madagascar_trees_certificate.pdf">
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>,
      <div className="item" data-value="2" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child1.jpg" className={classes.forestImg} alt="child1" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME1')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="3" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child2.jpg" className={classes.forestImg} alt="child2" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME2')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="4" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child3.jpg" className={classes.forestImg} alt="child3" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME3')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="5" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child4.jpg" className={classes.forestImg} alt="child4" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME4')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="6" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child5.jpg" className={classes.forestImg} alt="child5" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME5')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="7" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child6.jpg" className={classes.forestImg} alt="child6" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME6')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="8" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child7.jpg" className={classes.forestImg} alt="child7" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME7')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="9" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child8.jpg" className={classes.forestImg} alt="child8" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME8')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="10" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child9.jpg" className={classes.forestImg} alt="child9" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME9')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
      <div className="item" data-value="11" onDragStart={handleDrag}>
        <div className={classes.forest}>
          <img src="img/landing/child/child10.jpg" className={classes.forestImg} alt="child10" />
          <div className={classes.forestDownload}>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDNAME10')}</Typography>
            <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
          </div>
        </div>
      </div>,
    ]
    setItems(itemsTemp)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid id="charity" className={classes.charityContent}>
      <Grid item xs={12} sm={12} md={6} className={classes.leftContent}>
        <Typography className={classes.title}>{t('CHARITY')}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.rightContent}>
        <AliceCarousel
          mouseTracking
          disableDotsControls
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </Grid>
    </Grid>
  )
}
