import React , {useState, useEffect }from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../products';
import Product from '../Product';
import axios from 'axios';


function Home() {
  
  /*const [products, setProducts] = useState([])

  useEffect(() =>{

    async function fetchProducts(){

    
      const {data} = await axios.get('http://blahblah')
      setProducts(data)
    }

    fetchProducts()
  }, [])*/
  return (
    <div>
      
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product = {product}/>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
