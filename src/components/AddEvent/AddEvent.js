import axios from 'axios';
import React, { useRef } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const AddEvent = () => {
    const titleRef = useRef('');
    const dateRef = useRef('');
    const imgUrlRef = useRef('');
    const descriptionRef = useRef('');
    const handleAddEvent = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgUrlRef.current.value;
        const data = { title, date, description, img };
        axios.post('http://localhost:5000/events', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('successfully added');
                    e.target.reset();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Container>
            <div className="bg-white mb-4 p-2">
                <h2>Add Event</h2>
            </div>
            <div className="bg-white p-5">
                <Form onSubmit={handleAddEvent}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} type="title" placeholder="Enter title" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control ref={dateRef} type="date" placeholder="Date" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImageurl">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control ref={imgUrlRef} placeholder="www.example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} as="textarea" rows={3} placeholder="Apartment, studio, or floor" />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddEvent;