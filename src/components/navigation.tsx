import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { Avatar, MenuItem } from "@material-ui/core";

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
        alignItems: 'center'
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: 'transparent'
      },
      '&.MuiInput-underline:before': {
        borderBottom: 'none'
      },
      '&.MuiInput-underline:after': {
        borderBottom: 'none'
      },
      '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none'
      }
    },
    langItem: {
      fontSize: '15px',
      display: 'flex',
    },
    avatar: {
      width: '30px',
      height: '30px',
      marginRight: '5px'
    }
  }),
);

export default function Navigation() {
  const classes = useStyles();
  const { t,i18n } = useTranslation();

  useEffect(() => {
  }, [])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <div className='navbar-lang'>
            <Select defaultValue="en" id="grouped-select" className={classes.langSel} onChange={handleChange} >
              <MenuItem value="en" className={classes.langItem}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/english.svg" />
                English
              </MenuItem>
              <MenuItem value="ge" className={classes.langItem} >
                <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/germany.svg" />
                Deutsch
              </MenuItem>
              <MenuItem value="fr" className={classes.langItem} >
                <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/france.svg" />
                Française
              </MenuItem>
              <MenuItem value="tu" className={classes.langItem} >
                <Avatar className={classes.avatar} alt="Remy Sharp" src="./img/flags/turkey.svg" />
                Türkiye
              </MenuItem>
            </Select>
          </div>
          <div className='navbar-logo'>
            <img width="150" height="68" src="img/logo.png" alt="logo"/>
          </div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#philosophy' className='page-scroll'>
                {t("PHILOSOPHY")}
              </a>
            </li>
            <li>
              <a href='#charity' className='page-scroll'>
                {t("CHARITY")}
              </a>
            </li>
            <li>
              <a href='#community' className='page-scroll'>
                {t("COMMUNITY")}
              </a>
            </li>
            <li>
              <a href='#academy' className='page-scroll'>
                {t("ACADEMY")}
              </a>
            </li>
            <li>
              <a href='#tools' className='page-scroll'>
                {t("TOOLS")}
              </a>
            </li>
            <li>
              <a href='#path' className='page-scroll'>
                {t("PATHS")}
              </a>
            </li>
            <li>
              <a href='#faq' className='page-scroll'>
                {t("FAQ")}
              </a>
            </li>
            <li>
              <a href='#aboutus' className='page-scroll'>
                {t("ABOUTUS")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
