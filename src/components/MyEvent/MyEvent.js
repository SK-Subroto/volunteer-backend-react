import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const MyEvent = () => {
    const { user } = useAuth();
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/volunteer')
            .then(res => setMyEvents(res.data.filter(d => d.email === user.email)))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/volunteer/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remainingEvents = myEvents.filter(event => event._id !== id);
                    setMyEvents(remainingEvents);
                }
            })
    }

    return (
        <>
            <Header />
            <Container className="bg-light">
                <Row lg={2} className="g-4">
                    {
                        myEvents.map(event => {
                            return (
                                <Col>
                                    <Card className="d-flex flex-row rounded-3">
                                        <Card.Img variant="top" className="event-img p-4" src={event.img} />
                                        <Card.Body>
                                            <Card.Title>{event.title}</Card.Title>
                                            <Card.Text>
                                                {event.description.slice(0, 150)}
                                                <p className="fs-3">{event.date}</p>
                                            </Card.Text>
                                            <Button onClick={() => handleDelete(event._id)}>Remove</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
};

export default MyEvent;