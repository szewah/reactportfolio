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
                    <a href="https://szewah.github.io/bluellama/templates/index.html" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%', border: "none" }}>
                            <Card.Img variant="top" src={bluellama} />
                        </Card>
                    </a>
                </Col>
                <Col className="card-column">
                    <a href="https://szewah.github.io/clickgame/" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%', border: "none" }}>
                            <Card.Img variant="top" src={clickgame} />
                        </Card>
                    </a>
                </Col>
                <Col className="card-column">
                    <a href="https://whispering-plateau-42486.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%', border: "none"  }}>
                            <Card.Img variant="top" src={eatDaBurger } />
                        </Card>       
                    </a>         
                </Col>
            </Row>
            <Row>
                <Col className="card-column">
                    <a href="https://szewah.github.io/gif_fantastic/" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%', border: "none"  }}>
                            <Card.Img variant="top" src={giftastic} />  
                        </Card>
                    </a>
                </Col>
                <Col className="card-column">
                    <a href="https://sheltered-beyond-32917.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%', border: "none"  }}>
                            <Card.Img variant="top" src={google} />
                        </Card>
                    </a>
                </Col>
                <Col className="card-column">
                    <a href="https://szewah.github.io/word-guess-game/" target="_blank" rel="noopener noreferrer">
                        <Card style={{ width: '100%', border: "none"  }}>
                            <Card.Img variant="top" src={hangman} />
                        </Card>       
                    </a>         
                </Col>
            </Row>
        </Container>
    )
} 

export default PortCards;