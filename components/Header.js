import React from "react";
import styles from "./styles/Header.module.css";
import Navbar from "./Navbar.js";
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