import React from "react";
import styles from "/components/styles/Navbar.module.css";

const Navbar = () =>{
    return(
        <div className ={styles.navbar}>
           <button className = {styles.button}>Home</button>
           <button className = {styles.button}>Sobre</button>
           <button className = {styles.button}>Notícias</button>
           <button className = {styles.button}>Eventos</button>
           <button className = {styles.button}>Publicações</button>
           <button className = {styles.button}>Associe-se</button>
           <button className = {styles.button}>Contato</button>
        </div>
    )

}
export default Navbar;