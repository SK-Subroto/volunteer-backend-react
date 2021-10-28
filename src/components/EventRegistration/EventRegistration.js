import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1329.png'
import Header from '../Header/Header';

const EventRegistration = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [event, setEvent] = useState({});

    const purposeRef = useRef('');
    const dateRef = useRef('');

    useEffect(() => {
        axios.get(`http://localhost:5000/events/${id}`)
            .then(res => {
                setEvent(res.data);
            })
    }, [event]);

    const handleEventRegestration = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const date = dateRef.current.value;
        const purpose = purposeRef.current.value;
        const title = event.title;
        const description = event.description;
        const img = event.img;
        const data = { name, email, date, purpose, title, description, img }

        axios.post('http://localhost:5000/volunteer', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("successfully added");
                }
            })
            .catch(err => {
                console.log(err);
            })

        console.log({ name, email, date, description });
        e.target.reset();
    }
    return (
        <>
            <Header />
            <Container className="mt-3 text-center">
                <img className="main-logo" src={logo} alt="" />
                <Form onSubmit={handleEventRegestration} className="w-50 border border-2 mx-auto p-5 mt-2">
                    <h2>{event.title}</h2>
                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Control value={user.displayName} className="border-start-0 border-top-0 border-end-0" type="text" placeholder="Full Name" disabled />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control value={user.email} className="border-start-0 border-top-0 border-end-0" type="email" placeholder="Email" disabled />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicDate">
                        <Form.Control ref={dateRef} className="border-start-0 border-top-0 border-end-0" type="date" placeholder="Date" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPurpose">
                        <Form.Control ref={purposeRef} className="border-start-0 border-top-0 border-end-0" type="text" placeholder="Why you wnats to join?" />
                    </Form.Group>


                    <div className="d-grid">
                        <Button variant="primary" type="submit">
                            Registration
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default EventRegistration;