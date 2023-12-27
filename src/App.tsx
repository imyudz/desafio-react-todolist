
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'
import styles from './App.module.css'
import ShowTasks from './components/ShowTasks/ShowTasks'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <ShowTasks/>
      </div>
    </>
  )
}

export default App
