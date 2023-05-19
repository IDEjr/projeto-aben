import styles from './Associese.module.css'; // Default styles

function AssocieseButton(){
    return(
        <div className={styles.container}>
            <a className={styles.button} href="https://web.eventogyn.com.br/event/abenrs/registration"> 
                Associar / Renovar Anuidade
            </a>
            <a className={styles.button} href="https://web.eventogyn.com.br/event/abenrs/attendee"> 
                Área do Associado
            </a>
 
        </div>
    )
};

export default AssocieseButton;