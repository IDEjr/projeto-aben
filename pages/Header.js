import React from "react";
import styles from "../components/styles/Header.module.css";
import Navbar from "../components/Navbar.js";
import Title from "../components/Title.js";


const Home = () =>{
return(
    <div className ={styles.Header}>
        <Title/>
        <Navbar/>
    </div>
);

}
export default Home;