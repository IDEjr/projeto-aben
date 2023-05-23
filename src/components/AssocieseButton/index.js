import styles from './Associese.module.css'; // Default styles

function AssocieseButton(){
    return(
        <div className={styles.container}>
            <a className={styles.button} href="https://web.eventogyn.com.br/event/abenrs/site/content/associe-se"> 
                Associar / Renovar Anuidade
            </a>
            <a className={styles.button} href="https://web.eventogyn.com.br/event/abenrs/site/content/area-do-associado"> 
               Emitir Recibo
            </a>
            <a className={styles.button} href="https://web.eventogyn.com.br/event/abenrs/site/content/area-do-associado"> 
                Área do Associado
            </a>
        </div>
    )
};

export default AssocieseButton;