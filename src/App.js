import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './App.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Coming soon');
    console.log(email, role, password);
  }

  return (
    <div className='App'>
    <form onSubmit={handleSubmit}>

<FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel className='mb-3' controlId="floatingPassword" label="Password">
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      </FloatingLabel>
     
        <Form.Select value={role} onChange={(e) => setRole(e.target.value)} aria-label="Default select example">
      <option>select role</option>
      <option value="admin">admin</option>
      <option value="employees">employees</option>
    </Form.Select>
  
      <br />
      <Button type="submit" variant="primary">Sign In</Button>
    </form>
    </div>
  );
}

export default SignIn;
