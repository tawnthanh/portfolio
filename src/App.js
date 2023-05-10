import './App.css';
import me from './images/me.jpeg'
import Content from './components/Content';

const App = () => {

  return (
    <div className='app'>
      <div id='profile'>
        <img src={me} />
      </div>
      <Content />
    </div>
  );
}

export default App;
