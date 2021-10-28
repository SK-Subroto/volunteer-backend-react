import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import Event from '../Event/Event';
import Header from '../Header/Header';
import "./Home.css"

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(res => setEvents(res.data.events))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <Header />
            <Container>
                <div className="text-center">
                    <h1>I grow by helping people in need.</h1>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <FormControl
                            placeholder="Search..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>

                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        events.map(event => <Event key={event._id} event={event} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;