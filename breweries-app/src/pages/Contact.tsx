import React from 'react'
import { Link, Form } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <p><Link to='/'>Back</Link></p>
        <h2>Contact form:</h2>
        <p>Leave your contact & message in the form below</p>
        <Form method='post' action='/contact'>
            <label htmlFor='email'>
                <span>Email:</span>
                <input 
                type='email' 
                name='email' 
                placeholder='Your email'
                required 
                />
            </label>
            <label htmlFor='message'>
                <span>Message:</span>
                <input
                type='textarea'
                name='message'
                placeholder='Your message'
                required
                />
            </label>
            <button type='submit'>Submit</button>
        </Form>
    </div>
  )
}

export default Contact

export const contactSubmit = async ({ request }: { request: any }) => {
    console.log(request);
    const data = await request.formData();
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(submission);
    return submission;
}