import { Container } from 'react-bootstrap'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/screens/Home';

function App() {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
          <h1>Werukamu to the Bugz Store</h1>
          <Home/>
        </Container>
      </main>
      <Footer/>
    </div>

  );
}

export default App;
