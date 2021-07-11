import './App.css';
import TweetsList from './components/TweetsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TweetsList fetchSize={15} />
      </header>
    </div>
  );
}

export default App;
