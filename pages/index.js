import Header from '../components/Header';
import Tbody from '../components/Tbody';
import s from './index.module.css';


function App() {
  return <>
    <Header />
    <table className={s.app}>
      <Tbody />
    </table>
  </>
}

export default App;