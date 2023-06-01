import React from 'react'
import { Link, Form } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact-page'>
        <div className= 'title'>

        <p><Link to='/'>Back</Link></p>
        <h2>Contact form:</h2>
        <p>Leave your contact & message in the form below</p>
        </div>
        <Form method='post' action='/contact'>
            <label htmlFor='email'>Email:</label>
            <input 
            type='email' 
            name='email' 
            placeholder='Your email'
            required 
            />
            <label htmlFor='message'>Message: </label>
            <textarea
            // type='textarea'
            name='message'
            rows={3}
            placeholder='Your message'
            required
            />
            <button type='submit'>Submit</button>
        </Form>
    </div>
  )
}

export default Contact

export const contactSubmit = async ({ request }: { request: any }) => {
    // console.log(request);
    const data = await request.formData();
    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }
    console.log(submission);
    return submission;
}