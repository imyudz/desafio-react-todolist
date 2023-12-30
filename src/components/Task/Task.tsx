import { Trash } from 'phosphor-react';
import { Check } from 'phosphor-react';
import styles from './Task.module.css'
import { TaskI } from '../../App';

interface TaskPropsInterface {
    taskInfo: TaskI,
    onDeleteTask: (taskId: string) => void;
}
function Task({ taskInfo, onDeleteTask }: TaskPropsInterface) {

    const handleDeleteClick = () => {
        const choice = window.confirm("Tem certeza que deseja deletar esta tarefa?");
        choice &&
            onDeleteTask(taskInfo.id);
    }


    return (
        <main className={styles.taskCard}>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" name="taskStatus" />
                <Check className={styles.checkIcon} size={12} />
            </label>
            <p className={`${styles.paragraph} ${styles.completed}`}>{taskInfo.title}</p>
            <button onClick={handleDeleteClick}>
                <Trash size={16} color="#808080"/>
            </button>  
        </main> 
    );
}

export default Task;