import styles from './ShowTasks.module.css';
import Task from '../Task/Task';

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

            

            <div className={styles.tasksContainer}>
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
}

export default ShowTasks;