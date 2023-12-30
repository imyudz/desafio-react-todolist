import styles from './ShowTasks.module.css';
import Task from '../Task/Task';
import { TaskI } from '../../App';
import Empty from './Empty';

interface ShowTasksPropsI {
    taskList: TaskI[];
    sendDeleteTask: (taskId: string) => void;
    sendTaskState: (taskId: string) => void;
}

function ShowTasks({ taskList, sendDeleteTask, sendTaskState }: ShowTasksPropsI) {

    const handleDeleteTask = (taskId: string) => {
        sendDeleteTask(taskId);
    }

    const showTaskConcludedCount = () => {
        const concludedTaskCount = taskList.reduce((acc, task) => {
            if (task.isCompleted) {
                return acc + 1;
            }
            return acc;
        }, 0);
        return `${concludedTaskCount} de ${taskList.length}`
    }

    return (
        <div className={styles.showTasksWrapper}>
            <div className={styles.tasksInfo}>
                <div className={styles.tasksCriadas}>
                    <span className={styles.title}>Tarefas Criadas<span className={styles.counter}>{taskList.length}</span></span>
                </div>
                <div className={styles.tasksConcluidas}>
                    <span className={styles.title}>Concluídas<span className={styles.counter}>{showTaskConcludedCount()}</span></span>
                </div>
            </div>
            {
                taskList.length !== 0 ?
                    <div className={styles.tasksContainer}>
                        {
                            taskList.map(task => <Task key={task.id} taskInfo={task} onDeleteTask={handleDeleteTask} onChangeTaskState={() => sendTaskState(task.id)} />)
                        }
                    </div>
                : <Empty/>
            }
            
        </div>
    );
}

export default ShowTasks;