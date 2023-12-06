import { Form } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './style.css'
import {  FormEvent, useState } from "react";
import useRegistration from "../hook/useRegistration";
import CandidateEntity from "../entities/candidate";


export default function RegistryForm() {
    const formDefaut = {
        name: '',
        email: '',
        phone: '',
        age: 0,
        gender: '',
        fieldOfStudy: ''
    }
    const [cadidate,setCandidate] = useState(formDefaut)
    const {addCandidate, removeCandidate, candidatesData} = useRegistration() 

    const stateUpdate = (ev:any)=>{
        setCandidate((state)=>{
            return{
                ...state,
                [ev.target.name]: ev.target.value
            }
        })
    }
    const handleSubmit = (ev:FormEvent<HTMLFormElement>)=>{
        ev.preventDefault()
        const validCandidate = new CandidateEntity(cadidate)
        addCandidate(validCandidate)
        console.log(cadidate)
    }

    return (
        <Form className="registry" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control placeholder="Nome" name="name" type="text"  value={cadidate.name} onChange={stateUpdate}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control placeholder="E-mail" name="email" type="email" value={cadidate.email} onChange={stateUpdate}/>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAge">
                    <Form.Label>Idade</Form.Label>
                    <Form.Control type="number" placeholder="00" name="age" value={cadidate.age} onChange={stateUpdate}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="(xx) xxxxx-xxxx" name="phone" value={cadidate.phone} onChange={stateUpdate}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Genero</Form.Label>
                    <Form.Control type="text" placeholder="Genero" name="gender" value={cadidate.gender} onChange={stateUpdate} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Campo de estudo</Form.Label>
                    <Form.Select defaultValue={cadidate.fieldOfStudy} name="fieldOfStudy" onChange={stateUpdate}>
                        <option value="">...</option>
                        <option value="Full-stack" >Full-stack</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Desktop">Desktop</option>
                        <option value="DevOps">DevOps</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}