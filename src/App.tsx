
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'
import styles from './App.module.css'
import ShowTasks from './components/ShowTasks/ShowTasks'
import { useState } from 'react';

export interface TaskI {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasksList, setTasksList] = useState<TaskI[]>([]);

  const handleTaskCreate = (taskTitle: string) => {
    setTasksList([...tasksList, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  const handleTaskDelete = (taskId: string) => {
    const filteredTasks = tasksList.filter(task => task.id !== taskId);
    setTasksList(filteredTasks);
  }

  const handleTaskState = (taskId: string) => {
    const updatedTaskList = tasksList.map(task => {
      if (task.id == taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasksList(updatedTaskList);
  };

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <AddTask onTaskCreate={handleTaskCreate} />
        <ShowTasks taskList={tasksList} sendDeleteTask={handleTaskDelete} sendTaskState={handleTaskState}/>
      </div>
    </main>
  )
}

export default App
