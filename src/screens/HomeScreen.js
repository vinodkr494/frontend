import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function HomeScreen() {
    return (
        <Container>
            <h2 className="py-2">Latest Products</h2>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
