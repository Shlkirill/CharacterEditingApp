import styles from './App.module.css'
import AppContainer from './components/app/AppContainer'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <AppContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
