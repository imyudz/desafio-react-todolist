import { Trash } from 'phosphor-react';
import { Check } from 'phosphor-react';
import styles from './Task.module.css'
import { TaskI } from '../../App';

interface TaskPropsInterface {
    taskInfo: TaskI,
    onDeleteTask: (taskId: string) => void;
    onChangeTaskState: (taskId: string) => void; 
}
function Task({ taskInfo, onDeleteTask, onChangeTaskState }: TaskPropsInterface) {

    const handleDeleteClick = () => {
        const choice = window.confirm("Tem certeza que deseja deletar esta tarefa?");
        choice &&
            onDeleteTask(taskInfo.id);
    }
    
    const paragraphStyle = taskInfo.isCompleted ? `${styles.paragraph} ${styles.completed}` : styles.paragraph

    return (
        <main className={styles.taskCard}>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" name="taskStatus" checked={taskInfo.isCompleted} onClick={() => onChangeTaskState(taskInfo.id)}/>
                <Check className={styles.checkIcon} size={12} />
            </label>
            <p className={paragraphStyle}>{taskInfo.title}</p>
            <button onClick={handleDeleteClick}>
                <Trash size={16} color="#808080"/>
            </button>  
        </main> 
    );
}

export default Task;