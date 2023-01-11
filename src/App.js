import '../src/components/styles/app.css';
import Header from '../src/components/Header.js';
import Main from './components/Main';

function App() {
  return (
    <div style={{ background: 'rgba(20, 20, 20, 1)' }}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
