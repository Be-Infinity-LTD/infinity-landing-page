import { useEffect, useState, useRef } from 'react'
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

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [items, setItems] = useState<any>([])

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState<number | null>(null)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(event.pageX - containerRef.current!.offsetLeft)
    setScrollLeft(containerRef.current!.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const x = event.pageX - containerRef.current!.offsetLeft
    const scroll = x - startX!
    containerRef.current!.scrollLeft = scrollLeft - scroll
  }

  const scrollLeftArrow = () => {
    containerRef.current!.scrollBy({
      left: -350,
      behavior: 'smooth',
    })
  }

  const scrollRightArrow = () => {
    containerRef.current!.scrollBy({
      left: 350,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setPlaying(isPlaying)
    setLoop(loop)

    const children: { id: number; img: string; name: string }[] = [
      {
        id: 2,
        img: 'child1.jpg',
        name: t('CHARITYCHILDNAME1'),
      },
      {
        id: 3,
        img: 'child2.jpg',
        name: t('CHARITYCHILDNAME2'),
      },
      {
        id: 4,
        img: 'child3.jpg',
        name: t('CHARITYCHILDNAME3'),
      },
      {
        id: 5,
        img: 'child4.jpg',
        name: t('CHARITYCHILDNAME4'),
      },
      {
        id: 6,
        img: 'child5.jpg',
        name: t('CHARITYCHILDNAME5'),
      },
      {
        id: 7,
        img: 'child6.jpg',
        name: t('CHARITYCHILDNAME6'),
      },
      {
        id: 8,
        img: 'child7.jpg',
        name: t('CHARITYCHILDNAME7'),
      },
      {
        id: 9,
        img: 'child6.jpg',
        name: t('CHARITYCHILDNAME8'),
      },
      {
        id: 10,
        img: 'child9.jpg',
        name: t('CHARITYCHILDNAME9'),
      },
      {
        id: 11,
        img: 'child10.jpg',
        name: t('CHARITYCHILDNAME10'),
      },
      {
        id: 12,
        img: 'child11.jpg',
        name: 'Avokpo Kodzotsè Marius',
      },
      {
        id: 13,
        img: 'child12.jpg',
        name: 'Aluwa Parfaite',
      },
      {
        id: 14,
        img: 'child13.jpg',
        name: 'Adzawla Yawa Ruth',
      },
      {
        id: 15,
        img: 'child14.jpg',
        name: 'Adamou Hakimatou',
      },
      {
        id: 16,
        img: 'child15.jpg',
        name: 'Kondo Essozimna Julio',
      },
      {
        id: 17,
        img: 'child16.jpg',
        name: 'Hessou Mawéna',
      },
      {
        id: 18,
        img: 'child17.jpg',
        name: 'Kouni Adzo Victoire',
      },
      {
        id: 19,
        img: 'child18.jpg',
        name: 'Sansane Freedom',
      },
      {
        id: 20,
        img: 'child19.jpg',
        name: 'Sogli Akossi Pauline',
      },
      {
        id: 21,
        img: 'child20.jpg',
        name: 'Bili Dayan',
      },
    ]

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
                {/* <i className="fas fa-download"></i> */}
              </a>
            </div>
          </div>
        </div>
      </div>,
      ...children.map((child) => {
        return (
          <div className="item" data-value={child.id} onDragStart={handleDrag}>
            <div className={classes.forest}>
              <img
                style={{ userSelect: 'none' }}
                src={`img/landing/child/${child.img}`}
                className={classes.forestImg}
                alt={child.name}
              />
              <div className={classes.forestDownload}>
                <Typography className={classes.ChildrenDesc}>{child.name}</Typography>
                <Typography className={classes.ChildrenDesc}>{t('CHARITYCHILDCONTENT')}</Typography>
              </div>
            </div>
          </div>
        )
      }),
    ]
    setItems(itemsTemp)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid id="charity" className={classes.charityContent}>
      <Grid item xs={12} sm={12} className={classes.leftContent}>
        <Typography className={classes.title}>{t('CHARITY')}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        // className={classes.rightContent}
        className={classes.charityContentGrid}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        <img
          src="img/landing/child/arrow-white.svg"
          style={{ transform: 'scaleX(-1)', left: '30px' }}
          className={classes.arrow}
          alt="child2"
          onClick={() => scrollLeftArrow()}
        />
        <img
          src="img/landing/child/arrow-white.svg"
          style={{ right: '33px' }}
          className={classes.arrow}
          alt="child2"
          onClick={() => scrollRightArrow()}
        />
        {items.map((item: any, i: any) => {
          return (
            <div key={i} className="itemContainer">
              {item}
            </div>
          )
        })}
        {/* <AliceCarousel
          mouseTracking
          disableDotsControls
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        /> */}
      </Grid>
    </Grid>
  )
}
