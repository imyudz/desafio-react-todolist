
import AddTask from './components/AddTask/AddTask'
import Header from './components/Header/Header'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask/>
      </div>
    </>
  )
}

export default App
