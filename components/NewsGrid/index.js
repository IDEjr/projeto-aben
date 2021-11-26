import React from "react"
import style from "./NewsGrid.module.css"
import News from "../News/index"
import { ButtonBase } from "../ButtonBase/index"
import news from "./data"

const NewsGrid = () => {
    const amountOfNewsToBeRendered = 6
    const listOfNews = news.slice(0, amountOfNewsToBeRendered).map(item => <News imageLink={item.imageUrl} newsTitle={item.title} newsHeadline={item.headline} />)

    return(
        <div style={{width: "auto"}}>
            <div className={style.gridHeader}>
                <h1 className={style.text}>Notícias</h1>
                <ButtonBase style={{marginRight: "25px", marginLeft: "100px", alignSelf:"flex-end"}} color="light" onClick={() => console.log("apertou no botaoo aee")}>
                     Mais {'\u2794'}
                </ButtonBase>
            </div>
            <div className={style.grid}>
                {listOfNews}
            </div>
        </div>
    )
}

export default NewsGrid;