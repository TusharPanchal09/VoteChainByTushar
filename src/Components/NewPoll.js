import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

const NewPoll = (props) => {
  const candidateName1 = useRef();
  const candidateName2 = useRef();

  const candidateName1URL = useRef();
  const candidateName2URL = useRef();

  const promptRef = useRef();

  const sendToBlockChain= async()=>{
    await window.contract.addUrl({
        name:candidateName1.current.value,
        url:candidateName1URL.current.value,
      });
      await window.contract.addUrl({
        name:candidateName2.current.value,
        url:candidateName2URL.current.value,
      });
      await window.contract.addCandidatePair({
          prompt:promptRef.current.value,
          name1:candidateName1.current.value,
          name2:candidateName2.current.value,
      });
      await window.contract.addToPromptArray({
        prompt:promptRef.current.value,
      });
  };

  return (
    <Container style={{ marginTop: "10px" }}>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>First Candidiate Name :-</Form.Label>
          <Form.Control
            ref={candidateName1}
            placeholder='Enter Candidate Name'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>First Candidate Image URL</Form.Label>
          <Form.Control
            ref={candidateName1URL}
            placeholder='Enter Image link address'
          ></Form.Control>
        </Form.Group>
        
        <Form.Group className='mb-3'>
          <Form.Label>Second Candidiate Name :-</Form.Label>
          <Form.Control
            ref={candidateName2}
            placeholder='Enter Candidate Name'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Second Candidate Image URL</Form.Label>
          <Form.Control
            ref={candidateName2URL}
            placeholder='Enter Image link address'
          ></Form.Control>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Prompt :-</Form.Label>
          <Form.Control ref={promptRef} placeholder='Chain 1/Chain 2/Chain 3/Chain 4/Chain 5'></Form.Control>
        </Form.Group>
      </Form>

      <Button onClick={sendToBlockChain} variant='primary'>
        Submit
        </Button>
    </Container>
  );
};

export default NewPoll;
