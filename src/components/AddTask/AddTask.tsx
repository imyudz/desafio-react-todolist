import styles from './AddTask.module.css';
import {PlusCircle} from 'phosphor-react'

function AddTask() {
    return (
        <div className={styles.createTaskWrapper}>   
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar
                <PlusCircle size={16}/>
            </button>
        </div>
    );
}

export default AddTask;