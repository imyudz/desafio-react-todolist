
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

  console.log(tasksList);

  const handleTaskCreate = (taskTitle: string) => {
    setTasksList([...tasksList, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  } 

  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <AddTask onTaskCreate={handleTaskCreate} />
        <ShowTasks/>
      </div>
    </main>
  )
}

export default App
