import '../src/styles/rootStyles.css';
import Header from '../src/view/Header.js';
import Main from './view/Main';

function App() {
  return (
    <div className="bg-color-body">
      <Header></Header>
      <Main />
    </div>
  );
}

export default App;
