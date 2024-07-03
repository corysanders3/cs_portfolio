import './App.css';
import Home from '../home/Home';
import Nav from '../nav/Nav';
import About from '../about/About';

function App() {

  return (
    <main className='app-main'>
      <Nav />
      <About />
      <Home />
    </main>
  );
}

export default App;
