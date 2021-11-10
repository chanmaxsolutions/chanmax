/** @format */

// import { ReactMailchimpEmailSignupForm } from 'react-mailchimp-email-signup-form';

// Here's a usage example when using functional components
// export const NewsLetter = () => (
// 	<ReactMailchimpEmailSignupForm
// 		elementId='first-email-signup-form'
// 		url='https://000webhostapp.us18.list-manage.com/subscribe/post?u=97c641e6c538039b240dbddff&amp;id=5b9b78cfe7'
// 		title=''
// 		subtitle=''
// 	/>
// );

// export default NewsLetter;

// https://000webhostapp.us18.list-manage.com/subscribe/post?u=97c641e6c538039b240dbddff&amp;id=5b9b78cfe7

/** @format */

const NewsLetter = () => {
	return (
		<div className=' mb-5'>
			<form
				action='https://formsubmit.co/admin@chanmax.io'
				method='POST'
				className='mt-3'>
				<div>
					<input
						className='contact-form-control form-control'
						type='email'
						id='email'
						name='Email'
						placeholder='Email'
						required
					/>
				</div>

				<input
					type='hidden'
					name='_cc'
					value='chanmaxsolutions@gmail.com,balasubramaniam.raghuraj@gmail.com'
				/>
				<input
					type='hidden'
					name='_next'
					value='http://localhost:4000/contact-thanks'
				/>
				<input type='hidden' name='_captcha' value='false' />
				<input
					type='hidden'
					name='_subject'
					value={`Someone subscribe in to your mail list`}
				/>
				<input type='text' name='_honey' style={{ display: 'none' }} />
				<div className='text-center'>
					<span>
						<button className='button mt-2 col-12' type='submit'>
							Subscribe Now
						</button>
					</span>
				</div>
			</form>
		</div>
	);
};

export default NewsLetter;
