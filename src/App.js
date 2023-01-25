import '../src/components/styles/app.css';
import Header from '../src/components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-color-body">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
