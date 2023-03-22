import Header from '../components/Header';
import Tbody from '../components/Tbody';
import s from './index.module.css';
import {ErrorBoundary} from 'react-error-boundary';
import {ErrorFallBack} from '../components/ErrorFallBack';

function App() {
 return <>
    <Header />
    <table className={s.app}>
    <ErrorBoundary
     FallbackComponent={ErrorFallBack}>
      <Tbody />
    </ErrorBoundary>
    </table>
  </>
}

export default App;