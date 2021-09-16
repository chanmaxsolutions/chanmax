/** @format */

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

const ContactForm = () => {
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');

	return (
		<div className='container mb-5'>
			<div className='row justify-content-md-center'>
				<div className='col-md-7 contact-form-inside-container'>
					<div className='row justify-content-md-center text-center'>
						<div className='col-lg-10 align-items-center'>
							<p className='sub-head'>Trusted and endorsed</p>
							<h3 className='pb-2 main-head'>
								Trusted and endorsed by Chanmax and a lot of company around
							</h3>
						</div>
					</div>

					<form
						// action="https://submit-form.com/oBBQtqrP"
						action='https://formsubmit.co/admin@chanmax.io'
						method='POST'
						className='mt-3'>
						<div className='row'>
							<div className='col-md-6'>
								<label htmlFor='name'>Name</label>
								<input
									className='contact-form-control form-control'
									type='text'
									id='name'
									name='Name'
									placeholder='Name'
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className='col-md-6'>
								<label htmlFor='email'>Email</label>
								<input
									className='contact-form-control form-control'
									type='email'
									id='email'
									name='Email'
									placeholder='Email'
									required
								/>
							</div>
						</div>

						<div className='row'>
							<div className='col-md-6'>
								<label htmlFor='phone'>Phone</label>
								<PhoneInput
									country='au'
									onBlur={(e) => setPhone(e.target.value)}
								/>
								{/* <input
                                    className="contact-form-control form-control"
                                    type="tel"
                                    id="phone"
                                    onChange={handleChange}
                                    name="phone"
                                    placeholder="Ex: +94 75 6042 601"
                                /> */}
								<input type='hidden' name='Phone' id='phone' value={phone} />
							</div>

							<div className='col-md-6'>
								<label htmlFor='company'>Company</label>
								<input
									className='contact-form-control form-control'
									type='company'
									id='company'
									name='Company'
									placeholder='Company'
								/>
							</div>
						</div>

						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							className='form-control col-md-6 contact-form-control'
							name='Message'
							placeholder='Message'
							rows='3'
							required></textarea>
						{/* <input
                            type="hidden"
                            name="_redirect"
                            value="http://localhost:4000/services"
                        /> */}
						<input
							type='hidden'
							name='_cc'
							value='chanmaxsolutions@gmail.com,balasubramaniam.raghuraj@gmail.com'
						/>
						<input
							type='hidden'
							name='_next'
							value='https://chanmax-io-new.vercel.app'
						/>
						<input type='hidden' name='_captcha' value='false' />
						<input
							type='hidden'
							name='_subject'
							value={`${name?.toUpperCase()} sent you a message through contact form`}
						/>
						<input type='text' name='_honey' style={{ display: 'none' }} />
						<div className='text-center'>
							<span>
								<button className='button mt-4 ' type='submit'>
									Send Message
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
