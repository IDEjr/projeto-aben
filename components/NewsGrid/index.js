import React from "react"
import style from "./NewsGrid.module.css"
import News from "../News/index"
import Button, { ButtonBase } from "../ButtonBase/index"
import news from "./data"

const NewsGrid = () => {
    const listOfNews = news.slice(0, 6).map(item => <News imageLink={item.imageUrl} newsTitle={item.title} newsHeadline={item.headline} />)

    return(
        <div className={style.gridContainer}>
            <div className={style.gridHeader}>
                <h1 className={style.text}>Notícias</h1>
                <ButtonBase style={{margin: "50px"}}color="light" children="Mais \u2794" onClick={() => console.log("apertou no botaoo aee")} />
            </div>
            <div className={style.grid}>
                {listOfNews}
            </div>
        </div>
    )
}

export default NewsGrid;