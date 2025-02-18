import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Alert from './Alert.jsx';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState();
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }  
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
    }
    else {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
    }
  }
  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Home mode={mode} showAlert={showAlert}/>
    </>
  )
}

export default App;