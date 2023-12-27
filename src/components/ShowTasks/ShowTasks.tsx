import styles from './ShowTasks.module.css';
import Clipboard from '../../assets/Clipboard.svg'

function ShowTasks() {
    return (
        <div className={styles.showTasksWrapper}>
            <div className={styles.tasksInfo}>
                <div className={styles.tasksCriadas}>
                    <span className={styles.title}>Tarefas Criadas<span className={styles.counter}>0</span></span>
                </div>
                <div className={styles.tasksConcluidas}>
                    <span className={styles.title}>Concluídas<span className={styles.counter}>2 de 5</span></span>
                </div>
            </div>
            <div className={styles.empty}>
                <img src={Clipboard} alt="clipboard" width={56} height={56} />
                <div className={styles.emptyText}>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.muted}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </div>
    );
}

export default ShowTasks;