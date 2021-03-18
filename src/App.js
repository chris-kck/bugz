import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/screens/Home';
import ProductScreen from './components/screens/ProductScreen';

function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <h1>Werukamu to the Bugz Store</h1>
          <Route path='/' component={Home} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
        </Container>
      </main>
      <Footer/>
    </Router>

  );
}

export default App;
