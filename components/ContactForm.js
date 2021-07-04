

const ContactForm = () => {


  return (
   <div className='container mb-5'>
        <div className='row justify-content-md-center'>
            <div className='col-md-7 contact-form-inside-container'>
            <p className="card-title text-center">Reach us</p>
            <h3 className='text-center'>Send us a Message</h3>
            <div className='row justify-content-md-center'>
            <div className='text-center col-md-6'>
            <p className='small'>Some quick example text to build on the card title and make up</p>
            </div>
            </div>
            
            <form action="https://submit-form.com/oBBQtqrP" className='mt-3'>

    <div className='row'>
    <div className='col-md-6'>
    <label htmlFor="name">Name</label>
    <input className='contact-form-control form-control' type="text" id="name" name="name" placeholder="Name" required  />
    </div>
    <div className='col-md-6'>
    <label htmlFor="email">Email</label>
    <input className='contact-form-control form-control' type="email" id="email" name="email" placeholder="Email" required  />
    </div>
    </div>

    
   <div className='row'>
   <div className='col-md-6'>
   <label htmlFor="phone">Phone</label>
    <input className='contact-form-control form-control' type="tel" id="phone" name="phone" placeholder="Ex: +94 75 6042 601"/>
   </div>

    <div className='col-md-6'>
    <label htmlFor="company">Company</label>
    <input className='contact-form-control form-control' type="company" id="company" name="company" placeholder="Company" />
    </div>
   </div>

    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      className='form-control col-md-6 contact-form-control'
      name="message"
      placeholder="Message"
      rows='3'
      required 
    ></textarea>
    <input
    type="hidden"
    name="_redirect"
    value="http://localhost:4000/services"
  />
    <div className='text-center'> 
    <span> <button className='button mt-4 contact-form-btn' type="submit">Send Message</button> </span>
    
    </div>
  </form>
            </div>

        </div>
   </div>
  
  );
}

export default ContactForm