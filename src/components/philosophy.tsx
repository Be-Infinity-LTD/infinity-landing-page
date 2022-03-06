import Grid from '@material-ui/core/Grid'
import { useTranslation } from "react-i18next";
import { useState } from 'react'

export default function Philosophy() {
  const { t } = useTranslation();
  const [opt1, setOpt1] = useState(true)
  const [opt2, setOpt2] = useState(false)
  const [opt3, setOpt3] = useState(false)
  const [opt4, setOpt4] = useState(false)
  const [opt5, setOpt5] = useState(false)
  const [opt6, setOpt6] = useState(false)
  
  const handleOptBtn1 = () => {
    setOpt1(true)
    setOpt2(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
  }
  const handleOptBtn2 = () => {
    setOpt1(false)
    setOpt2(true)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    setOpt6(false)
  }
  const handleOptBtn3 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(true)
    setOpt4(false)
    setOpt5(false)
    setOpt6(false)
  }
  const handleOptBtn4 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(true)
    setOpt5(false)
    setOpt6(false)
  }
  const handleOptBtn5 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(true)
    setOpt6(false)
  }
  const handleOptBtn6 = () => {
    setOpt1(false)
    setOpt2(false)
    setOpt3(false)
    setOpt4(false)
    setOpt5(false)
    setOpt6(true)
  }

  return (
    <div id='philosophy' className='text-center'>
      <div className='col-md-offset-1 section-title'>
        <h2>Philosophy and Team</h2>
      </div>
      <Grid className="main-content">
        <Grid item xs={6} className="content-left">
          <div className="content-img"></div>
        </Grid>
        <Grid item xs={6} className="content-right">
          <Grid className="content-text-title">
            {t("PHILOSOPHYTITLE")}
          </Grid>
          <Grid className="content-text-context1">
            {t("PHILOSOPHYCONTENT1")}
          </Grid>
          <Grid className="content-text-context2">
            {t("PHILOSOPHYCONTENT2")}
          </Grid>
        </Grid>
      </Grid>
      <Grid className="philosophy-options">
        <Grid container className="philosophy-options-btn">
          <Grid item xs={2} id="optBtn1" className={opt1 ? "philosophy-options-btn-grid-active" : "philosophy-options-btn-grid" } onMouseOver={handleOptBtn1}>
            <div id="optBtnItem1" className={opt1 ? "philosophy-options-btn-item-active" : "philosophy-options-btn-item" }>
              {t("PHILOSOPHYBTNNAME1")}
            </div>
          </Grid>
          <Grid item xs={2} id="optBtn2" className={opt2 ? "philosophy-options-btn-grid-active" : "philosophy-options-btn-grid"} onMouseOver={handleOptBtn2}>
            <div id="optBtnItem2" className={opt2 ? "philosophy-options-btn-item-active" : "philosophy-options-btn-item" }>
              {t("PHILOSOPHYBTNNAME2")}
            </div>
          </Grid>
          <Grid item xs={2} id="optBtn3" className={opt3 ? "philosophy-options-btn-grid-active" : "philosophy-options-btn-grid"} onMouseOver={handleOptBtn3}>
            <div id="optBtnItem3" className={opt3 ? "philosophy-options-btn-item-active" : "philosophy-options-btn-item" }>
              {t("PHILOSOPHYBTNNAME3")}
            </div>
          </Grid>
          <Grid item xs={2} id="optBtn4" className={opt4 ? "philosophy-options-btn-grid-active" : "philosophy-options-btn-grid"} onMouseOver={handleOptBtn4}>
            <div id="optBtnItem4" className={opt4 ? "philosophy-options-btn-item-active" : "philosophy-options-btn-item" }>
              {t("PHILOSOPHYBTNNAME4")}
            </div>
          </Grid>
          <Grid item xs={2} id="optBtn5" className={opt5 ? "philosophy-options-btn-grid-active" : "philosophy-options-btn-grid"} onMouseOver={handleOptBtn5}>
            <div id="optBtnItem5" className={opt5 ? "philosophy-options-btn-item-active" : "philosophy-options-btn-item" }>
              {t("PHILOSOPHYBTNNAME5")}
            </div>
          </Grid>
          <Grid item xs={2} id="optBtn6" className={opt6 ? "philosophy-options-btn-grid-active" : "philosophy-options-btn-grid"} onMouseOver={handleOptBtn6}>
            <div id="optBtnItem6" className={opt6 ? "philosophy-options-btn-item-active" : "philosophy-options-btn-item" }>
              {t("PHILOSOPHYBTNNAME6")}
            </div>
          </Grid>
        </Grid>
        <Grid>
          {
            opt1 ? (
              <Grid className="philosophy-options-content" id="optContent1">
                {t("PHILOSOPHYBTNCONTENT1")}
              </Grid>
            ) : (
              <></>
            )
          }
          {
            opt2 ?  (
              <Grid className="philosophy-options-content" id="optContent2">
                {t("PHILOSOPHYBTNCONTENT2")}
              </Grid>
            ) : (
              <></>
            )
          }
          {
            opt3 ? (
              <Grid className="philosophy-options-content" id="optContent3">
                {t("PHILOSOPHYBTNCONTENT3")}
              </Grid>
            ) : (
              <></>
            )
          }
          {
            opt4 ? (
              <Grid className="philosophy-options-content" id="optContent4">
                {t("PHILOSOPHYBTNCONTENT4")}
              </Grid>
            ) : (
              <></>
            )
          }
          {
            opt5 ? (
              <Grid className="philosophy-options-content" id="optContent5">
                {t("PHILOSOPHYBTNCONTENT5")}
              </Grid>
            ) : (
              <></>
            )
          }
          {
            opt6 ? (
              <Grid className="philosophy-options-content" id="optContent6">
                {t("PHILOSOPHYBTNCONTENT6")}
              </Grid>
            ) : (
              <></>
            )
          }
        </Grid>
      </Grid>
    </div>
  )
}
