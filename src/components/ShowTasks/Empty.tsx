import Clipboard from "../../assets/Clipboard.svg";
import styles from "./Empty.module.css";

function Empty() {
    return (
        <div className={styles.empty}>
            <img src={Clipboard} alt="clipboard" width={56} height={56} />
            <div className={styles.emptyText}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.muted}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

export default Empty;