import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import bluellama from '../../images/bluellama.png'
import clickgame from '../../images/clickgame.png'
import eatDaBurger from '../../images/eatDaBurger.png'
import giftastic from '../../images/giftastic.png'
import google from '../../images/google.png'
import hangman from '../../images/hangman.png'

const PortCards = () => {
    return (
        <Container className="cardsContainer">
            <Row>
                <Col className="card-column">
                    <Card style={{ width: '100%' }}>
                        <a href="" target="_blank" ref="noopener noreferrer">
                            <Card.Img variant="top" src={bluellama} />
                        </a>
                    </Card>
                </Col>
                <Col className="card-column">
                    <Card style={{ width: '100%' }}>
                        <a href="" target="_bland" ref="noopener noreferrer">
                            <Card.Img variant="top" src={clickgame} />
                        </a>
                    </Card>
                </Col>
                <Col className="card-column">
                    <a href="https://whispering-plateau-42486.herokuapp.com/" target="_blank" ref="noopener noreferrer">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={eatDaBurger } />
                        </Card>       
                    </a>         
                </Col>
            </Row>
            <Row>
                <Col className="card-column">
                    <a href="https://szewah.github.io/gif_fantastic/" target="_blank" ref="noopener noreferrer">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={giftastic} />  
                        </Card>
                    </a>
                </Col>
                <Col className="card-column">
                    <a href="https://sheltered-beyond-32917.herokuapp.com/" target="_blank" ref="noopener noreferrer">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={google} />
                        </Card>
                    </a>
                </Col>
                <Col className="card-column">
                    <a href="https://szewah.github.io/word-guess-game/" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={hangman} />
                        </Card>       
                    </a>         
                </Col>
            </Row>
        </Container>
    )
} 

export default PortCards;