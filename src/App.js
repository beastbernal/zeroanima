import './App.css';
import Lottie from 'react-lottie';
import animationData from './lotties/9759-halloween-flying-ghost-loading.json';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Lottie 
          options={defaultOptions}
            height={400}
            width={400}
          />
        <p>
          @zeroanima
        </p>    
        <p>Under Construction</p>    
      </header>
    </div>
  );
}

export default App;
