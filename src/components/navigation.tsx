import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
// import { Avatar, MenuItem } from '@material-ui/core'
// import Button from '@material-ui/core/Button'
// import Popper from '@material-ui/core/Popper'
// import Grow from '@material-ui/core/Grow'
// import ClickAwayListener from '@material-ui/core/ClickAwayListener'
// import Paper from '@material-ui/core/Paper'
// import MenuList from '@material-ui/core/MenuList'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

interface Props {
  scrolltotop: boolean
}
function ScrollTop({ scrolltotop }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className={scrolltotop ? 'c-scroll-top' : 'c-scroll-top-disable'}>
      <span onClick={handleClick} role="presentation">
        <i className="fas fa-chevron-up c-scroll-top-icon"></i>
      </span>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    langSel: {
      fontSize: '20px',
      '& .MuiSelect-root': {
        display: 'flex',
        alignItems: 'center',
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: 'transparent',
      },
      '&.MuiInput-underline:before': {
        borderBottom: 'none',
      },
      '&.MuiInput-underline:after': {
        borderBottom: 'none',
      },
      '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none',
      },
    },
    langItem: {
      fontSize: '15px',
      display: 'flex',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    avatar: {
      width: '30px',
      height: '30px',
      marginRight: '5px',
    },
    mainLangMenu: {
      zIndex: 100,
    },
    navMenu: {
      display: 'block',
    },
    navSubMenu: {
      display: 'none',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      // backgroundColor: theme.palette.background.paper,
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(260deg, #FFFFFF 50%, #eef1f6 50%)',
      boxShadow: theme.shadows[5],
      padding: '4% 3%',
      borderRadius: '15px',
      margin: '0px 20%',
      '&:focus-visible': {
        outline: 'none',
      },
    },
    paperTitle: {
      textAlign: 'center',
      fontFamily: "'Spartan', Sans-serif",
      fontWeight: 700,
      color: 'black',
    },
    paperContent: {
      fontSize: '20px',
      fontFamily: "'ZCOOL XiaoWei', Sans-serif",
      fontWeight: 600,
      color: 'black',
    },
    modalLink: {
      color: '#555',
      fontSize: '15px',
      fontWeight: 600,
      padding: '15px 0px',
      borderRadius: '0',
      marginLeft: '10px',
      marginRight: '10px',
      textTransform: 'capitalize',
      cursor: 'pointer',
    },
    navGetStartLink: {
      color: 'blue !important',
      fontSize: '15px !important',
      fontWeight: 600,
      padding: '8px 2px !important',
      borderRadius: '0 !important',
      marginLeft: '10px !important',
      marginRight: '10px !important',
    },
    [theme.breakpoints.down(600)]: {
      paperTitle: {
        fontSize: '20px',
      },
      paperContent: {
        fontSize: '15px',
      },
      paper: {
        margin: '0px 10%',
      },
    },
  }),
)

interface NavigationProps {
  type: string
}

export default function Navigation({ type }: NavigationProps) {
  const [scrolltotop, setScrolltotop] = useState(false)
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 65) {
      setScrolltotop(true)
      window.innerWidth <= 768 ? setSticky(false) : setSticky(true)
    } else if (window.scrollY < 90) {
      setSticky(false)
      setScrolltotop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const classes = useStyles()
  const { t } = useTranslation()
  // const { t, i18n } = useTranslation()
  // const [strCurLang, setCurStrLang] = useState('English')
  // const [strCurAvatar, setCurAvatar] = useState('./img/flags/english.svg')
  const [curStyleMenn, setCurStyleMenu] = useState('button')
  const [curTogMenu, setCurTogMenu] = useState('menu')
  const [openGetStart, setOpenGetStart] = React.useState(false)

  // const anchorRef = React.useRef<HTMLButtonElement>(null)
  // const [open, setOpen] = React.useState(false)

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen)
  // }
  // const handleClose = (event: React.MouseEvent<EventTarget>) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
  //     return
  //   }
  //   setOpen(false)
  // }
  // function handleListKeyDown(event: React.KeyboardEvent) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault()
  //     setOpen(false)
  //   }
  // }

  // const handleEnglish = () => {
  //   i18n.changeLanguage('en')
  //   setCurStrLang('English')
  //   setCurAvatar('./img/flags/english.svg')

  //   setOpen(false)
  //   localStorage.setItem('Language', 'en')
  // }
  // const handleGerman = () => {
  //   i18n.changeLanguage('ge')
  //   setCurStrLang('Deutsch')
  //   setCurAvatar('./img/flags/germany.svg')

  //   setOpen(false)
  //   localStorage.setItem('Language', 'ge')
  // }

  // const handleFrench = () => {
  //   i18n.changeLanguage('fr')
  //   setCurStrLang('Française')
  //   setCurAvatar('./img/flags/france.svg')

  //   setOpen(false)
  // }
  // const handleTurkish = () => {
  //   i18n.changeLanguage('tu')
  //   setCurStrLang('Türkiye')
  //   setCurAvatar('./img/flags/turkey.svg')

  //   setOpen(false)
  // }
  const handleShowMenu = () => {
    if (curStyleMenn === 'button') {
      setCurStyleMenu('button menu-opened')
      setCurTogMenu('menu open')
    } else {
      setCurStyleMenu('button')
      setCurTogMenu('menu')
    }
  }
  const handleGetStartOpen = () => {
    setOpenGetStart(true)
  }
  const handleGetStartClose = () => {
    setOpenGetStart(false)
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement
    var elementPosition = element.getBoundingClientRect().top
    var headerOffset = 90
    var offsetPosition = elementPosition + headerOffset

    window.scrollTo({
      behavior: 'smooth',
      top: window.scrollY + offsetPosition - headerOffset * 2,
    })
  }

  return (
    <>
      <div className={`c-header-root${sticky ? ' sticky' : ''}`}>
        <nav id="menu" className="navbar navbar-default navbar-sticky-top">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-logo">
                <a href="/" className={classes.modalLink}>
                  <img width="150" height="68" src="img/logo.png" alt="logo" />
                </a>
                {/* <div className="navbar-lang">
                  <div>
                    <Button
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                      className={classes.langItem}
                    >
                      <Avatar className={classes.avatar} alt="Remy Sharp" src={strCurAvatar} />
                      {strCurLang}
                    </Button>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                      className={classes.mainLangMenu}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="menu-list-grow"
                                className={classes.langSel}
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem className={classes.langItem} onClick={handleEnglish}>
                                  <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/english.svg" />
                                  English
                                </MenuItem>
                                <MenuItem className={classes.langItem} onClick={handleFrench}>
                                  <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/france.svg" />
                                  Française
                                </MenuItem>
                                <MenuItem className={classes.langItem} onClick={handleGerman}>
                                  <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/germany.svg" />
                                  Deutsch
                                </MenuItem>
                                <MenuItem className={classes.langItem} onClick={handleTurkish}>
                                  <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/turkey.svg" />
                                  Türkiye
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </div> */}
              </div>
            </div>

            <div className={type === 'main' ? classes.navMenu : classes.navSubMenu}>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className={classes.modalLink} onClick={() => scrollTo('academy')}>
                    <a>{t('ACADEMY')}</a>
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('tools')}>
                    <a>{t('TOOLS')}</a>
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('path')}>
                    <a>{t('PATHS')}</a>
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('team')}>
                    <a>{t('TEAM')}</a>
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('charity')}>
                    <a>{t('CHARITY')}</a>
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('faq')}>
                    <a>{t('FAQ')}</a>
                  </li>
                  <li className={classes.modalLink} onClick={handleGetStartOpen}>
                    <a>{t('GETSTARTED')}</a>
                  </li>
                  <li className={classes.modalLink}>
                    <a href="https://infinity-backoffice.com/auth/login">{t('LOGIN')}</a>
                  </li>
                </ul>
              </div>
              <nav id="cssmenu">
                <div id="head-mobile"></div>
                <div className={curStyleMenn} onClick={handleShowMenu}></div>
                <ul id="menu-main-menu-english" className={curTogMenu}>
                  <li className={classes.modalLink} onClick={() => scrollTo('academy')}>
                    {t('ACADEMY')}
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('tools')}>
                    {t('TOOLS')}
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('path')}>
                    {t('PATHS')}
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('team')}>
                    {t('TEAM')}
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('charity')}>
                    {t('CHARITY')}
                  </li>
                  <li className={classes.modalLink} onClick={() => scrollTo('faq')}>
                    {t('FAQ')}
                  </li>
                  <li className={classes.modalLink} onClick={handleGetStartOpen}>
                    {t('GETSTARTED')}
                  </li>
                  <li>
                    <a href="https://infinity-backoffice.com/auth/login/" className="page-scroll">
                      {t('LOGIN')}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openGetStart}
        onClose={handleGetStartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openGetStart}>
          <div className={classes.paper}>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT1')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT2')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT3')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT4')}</p>
            <p className={classes.paperContent}>{t('GETSTARTEDTEXT5')}</p>
          </div>
        </Fade>
      </Modal>
      <div id="back-to-top-anchor" />
      <ScrollTop scrolltotop={scrolltotop} />
    </>
  )
}
