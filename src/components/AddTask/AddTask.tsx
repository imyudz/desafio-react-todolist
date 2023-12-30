import styles from './AddTask.module.css';
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';

interface AddTaskPropsI {
    onTaskCreate: (taskTitle: string) => void;
}

function AddTask({ onTaskCreate }: AddTaskPropsI) {

    const [taskTitle, setTaskTitle] = useState("");


    function sendTaskTitle() {
        if (taskTitle !== "") {
            onTaskCreate(taskTitle);
            setTaskTitle("");
        }
    }
    
    return (
        <div className={styles.createTaskWrapper}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={(e) => setTaskTitle(e.target.value)}
                value={taskTitle}
                required
            />
            <button onClick={sendTaskTitle}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    );
}

export default AddTask;