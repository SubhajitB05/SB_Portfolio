import './Contact.css';

const Contact = () => {
  return (
    <div className='container contact-container'>
      <form className='message-box' onSubmit={(e)=>{e.preventDefault();}}>
        <input placeholder='Full Name' type='text'/>
        <input placeholder='Email' type='email'/>
        <input type='number' placeholder='Phone Number'/>
        <input type='text' placeholder='Subject'/>
        <textarea placeholder='Message' rows={10} cols={20}></textarea>
        <button className='send-btn' type='submit' >Send</button>
      </form>

    </div>
  )
}

export default Contact
