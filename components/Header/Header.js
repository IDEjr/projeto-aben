import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Title from "./Title.js";


const Home = () =>{
return(
    <div className ={styles.Header}>
        <Title/>
        <Navbar/>
    </div>
);

}
export default Home;