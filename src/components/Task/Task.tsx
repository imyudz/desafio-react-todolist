import { Trash } from 'phosphor-react';
import { Check } from 'phosphor-react';
import styles from './Task.module.css'

function Task() {
    return (
        <main className={styles.taskCard}>
            <label className={styles.checkboxLabel}>
                <input type="checkbox" name="taskStatus" />
                <Check className={styles.checkIcon} size={12} />
            </label>
            <p className={`${styles.paragraph} ${styles.completed}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia dignissimos solutad dasdasd? as asdas</p>
            <button>
                <Trash size={16} color="#808080"/>
            </button>  
        </main> 
    );
}

export default Task;