import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Avatar, MenuItem } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'

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
  }),
)

export default function Navigation() {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const [strCurLang, setCurStrLang] = useState('English')
  const [strCurAvatar, setCurAvatar] = useState('./img/flags/english.svg')
  const [curStyleMenn, setCurStyleMenu] = useState('button')
  const [curTogMenu, setCurTogMenu] = useState('menu')

  const anchorRef = React.useRef<HTMLButtonElement>(null)
  const [open, setOpen] = React.useState(false)
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleEnglish = () => {
    i18n.changeLanguage('en')
    setCurStrLang('English')
    setCurAvatar('./img/flags/english.svg')

    setOpen(false)
  }
  const handleFrench = () => {
    i18n.changeLanguage('fr')
    setCurStrLang('Française')
    setCurAvatar('./img/flags/france.svg')

    setOpen(false)
  }
  const handleGerman = () => {
    i18n.changeLanguage('ge')
    setCurStrLang('Deutsch')
    setCurAvatar('./img/flags/germany.svg')

    setOpen(false)
  }
  const handleTurkish = () => {
    i18n.changeLanguage('tu')
    setCurStrLang('Türkiye')
    setCurAvatar('./img/flags/turkey.svg')

    setOpen(false)
  }
  const handleShowMenu = () => {
    if( curStyleMenn === "button") {
      setCurStyleMenu("button menu-opened")
      setCurTogMenu("menu open")
    } else {
      setCurStyleMenu("button")
      setCurTogMenu("menu")
    }
  }

  return (
    <nav id="menu" className="navbar navbar-default navbar-sticky-top">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-lang">
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
          </div>
          <div className="navbar-logo">
            <img width="150" height="68" src="img/logo.png" alt="logo" />
          </div>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#philosophy" className="page-scroll">
                {t('PHILOSOPHY')}
              </a>
            </li>
            <li>
              <a href="#charity" className="page-scroll">
                {t('CHARITY')}
              </a>
            </li>
            <li>
              <a href="#community" className="page-scroll">
                {t('COMMUNITY')}
              </a>
            </li>
            <li>
              <a href="#academy" className="page-scroll">
                {t('ACADEMY')}
              </a>
            </li>
            <li>
              <a href="#tools" className="page-scroll">
                {t('TOOLS')}
              </a>
            </li>
            <li>
              <a href="#path" className="page-scroll">
                {t('PATHS')}
              </a>
            </li>
            <li>
              <a href="#faq" className="page-scroll">
                {t('FAQ')}
              </a>
            </li>
            <li>
              <a href="#aboutus" className="page-scroll">
                {t('ABOUTUS')}
              </a>
            </li>
          </ul>
        </div>
        <nav id='cssmenu'>
          <div id="head-mobile"></div>
          <div className={curStyleMenn} onClick={handleShowMenu}></div>
          <ul id="menu-main-menu-english" className={curTogMenu}>
            <li><a href="#philosophy">{t('PHILOSOPHY')}</a></li>
            <li><a href="#charity">{t('CHARITY')}</a></li>
            <li><a href="#community">{t('COMMUNITY')}</a></li>
            <li><a href="#academy">{t('ACADEMY')}</a></li>
            <li><a href="#tools">{t('TOOLS')}</a></li>
            <li><a href="#path">{t('PATHS')}</a></li>
            <li><a href="#faq">{t('FAQ')}</a></li>
            <li><a href="#aboutus">{t('ABOUTUS')}</a></li>
          </ul>
        </nav>
      </div>
    </nav>
  )
}
