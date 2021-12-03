import React from "react";
import styles from "./Navbar.module.css";
import Link from 'next/link';

const Navbar = () =>{
    return(
        <div className ={styles.navbar}>
           <Link href ="/Home"><button className = {styles.button}>Home</button></Link>
           <Link href ="/Sobre"><button className = {styles.button}>Sobre</button></Link>
           <Link href ="/Noticias"><button className = {styles.button}>Notícias</button></Link>
           <Link href ="/Eventos"><button className = {styles.button}>Eventos</button></Link>
           <Link href ="/Publicacoes"><button className = {styles.button}>Publicações</button></Link>
           <Link href ="/Associese"><button className = {styles.button}>Associe-se</button></Link>
           <Link href ="/Contato"><button className = {styles.button}>Contato</button></Link>
        </div>
    );
}
export default Navbar;