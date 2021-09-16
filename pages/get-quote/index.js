/** @format */

import React, { useState, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';

import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import { estimateData } from '../../data/quota';
import TextInput from '../../components/FormsUI/TextInput';
import BoxQuote from '../../components/BoxQuote';
import Toast from '../../components/Toast';
import { postService } from '../../helper/postService';
import { useRouter } from 'next/router';

function GetQuote() {
	const [state, setState] = useState(estimateData);
	const [values, setValues] = useState({});
	const [error, setError] = useState({});
	const [toast, setToast] = useState(false);
	const techRef = useRef(null);
	const budgetRef = useRef(null);
	const sourceRef = useRef(null);
	const router = useRouter();

	const handleChange = (e) => {
		setError({});
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const changePhone = (phone) => {
		setError({});
		setValues({ ...values, phone });
	};

	const handleSelect = (path, name) => {
		setError({});
		let temp = [...state];
		if (temp[path][name]['status']) {
			let selectedArray = Object.keys(state[path]).filter(
				(item) => state[path][item]['status'],
			);
			if (selectedArray.length <= 1) return;
		}
		temp[path][name]['status'] = !temp[path][name]['status'];
		setState(temp);
	};

	const handlePriceSelect = (path, name) => {
		setError({});
		let temp = [...state];
		if (!temp[path][name]['status']) {
			Object.keys(temp[path]).map((item) => {
				name === item
					? (temp[path][item]['status'] = true)
					: (temp[path][item]['status'] = false);
			});
		}
		setState(temp);
	};

	const scrollBehavior = (scroll) => {
		scroll?.current.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	};

	const handleSubmit = (e) => {
		setToast(false);
		e.preventDefault();
		let technology = Object.keys(state[0]).filter(
			(item) => state[0][item]['status'],
		);
		let budget = Object.keys(state[1]).find((item) => state[1][item]['status']);
		let source = Object.keys(state[2]).filter(
			(item) => state[2][item]['status'],
		);

		let err = [];

		if (!source.length) {
			scrollBehavior(sourceRef);
			err = { ...err, source: true };
		}

		if (!budget) {
			scrollBehavior(budgetRef);
			err = { ...err, budget: true };
		}

		if (!technology.length) {
			scrollBehavior(techRef);
			err = { ...err, technology: true };
		}

		if (err.technology || err.budget || err.source) {
			setToast(true);
			return setError(err);
		}

		const postData = {
			...values,
			technology,
			budget,
			source,
		};

		const form_data = new FormData();
		form_data.append('Name', postData.name);
		form_data.append('Company', postData.company);
		form_data.append('Email', postData.email);
		form_data.append('Phone', postData.phone);
		form_data.append('Source', postData.source);
		form_data.append('Technology', postData.technology);
		form_data.append('Budget', postData.budget);
		form_data.append(
			'_cc',
			'chanmaxsolutions@gmail.com,balasubramaniam.raghuraj@gmail.com',
		);
		form_data.append('_next', 'https://chanmax-io-new.vercel.app');
		form_data.append('_captcha', 'false');
		form_data.append(
			'_subject',
			`${postData.name?.toUpperCase()} requested a quote for ${
				postData.technology
			} development.`,
		);

		postService('https://formsubmit.co/admin@chanmax.io', form_data)
			.then(() => {
				router.push('/get-quote-thankyou');
			})
			.catch((err) => {
				console.log(err);
				setToast(true);
				setError({ error, message: 'Something went wrong' });
			});
	};

	return (
		<React.Fragment>
			{toast && (
				<Toast
					message={
						error.message || 'Please select at least one in each section'
					}
					handleClose={() => setToast(false)}
				/>
			)}
			<SEO title='Chanmax' />
			<PageHeader
				subHead='TRUSTED AND ENDORSED'
				mainHead='Trusted and endorsed by Chanmax and a lot of company around the world'
				bgImg='/images/4.jpg'
				des='We help product vendors create impactful and 
            futuristic digital solutions to solve real user problems.​'
			/>

			<div className='container contact-get-quote-container'>
				<div className='row justify-content-md-center'>
					<p className='get-quote-padding'>
						Tell us about the product, you are looking to build.
					</p>
					<div
						ref={techRef}
						className={`d-flex flex-wrap justify-content-center p-2 mb-4 ${
							error.technology && 'border border-danger'
						}`}>
						{state[0] &&
							Object.keys(state[0]).map((data, i) => (
								<BoxQuote
									key={i}
									isSelected={state[0][data]['status']}
									handleClick={() => handleSelect(0, data)}
									title={data}
									icon={state[0][data]['icon']}
								/>
							))}
					</div>

					<p className='get-quote-padding'>
						Tell us about the amount, you are looking to spend for.
					</p>
					<div
						ref={budgetRef}
						className={`d-flex flex-wrap justify-content-center p-2 mb-4 ${
							error.budget && 'border border-danger'
						}`}>
						{state[1] &&
							Object.keys(state[1]).map((data, i) => (
								<BoxQuote
									key={i}
									isSelected={state[1][data]['status']}
									handleClick={() => handlePriceSelect(1, data)}
									title={data}
									icon={state[1][data]['icon']}
								/>
							))}
					</div>
					<p className='get-quote-padding'>
						How did you find us to work for your project?
					</p>
					<div
						ref={sourceRef}
						className={`d-flex flex-wrap justify-content-center p-2 mb-4 ${
							error.source && 'border border-danger'
						}`}>
						{state[2] &&
							Object.keys(state[2]).map((data, i) => (
								<BoxQuote
									key={i}
									isSelected={state[2][data]['status']}
									handleClick={() => handleSelect(2, data)}
									title={data}
									icon={state[2][data]['icon']}
								/>
							))}
					</div>
					<div className='get-quote-form '>
						<form className='mt-4 row' onSubmit={handleSubmit}>
							<div className='col-lg-6'>
								<label htmlFor='name'>Name</label>
								<TextInput
									required
									onChange={handleChange}
									value={values.name}
									name='name'
									placeholder='Your Name'
								/>
							</div>
							<br />
							<div className='col-lg-6'>
								<label htmlFor='email'>Email</label>
								<TextInput
									type='email'
									required
									onChange={handleChange}
									value={values.email}
									name='email'
									placeholder='Email Address'
								/>
							</div>
							<br />
							<div className='col-lg-6'>
								<label htmlFor='company'>Company</label>
								<TextInput
									onChange={handleChange}
									value={values.company}
									name='company'
									placeholder='Company Name'
								/>
							</div>
							<br />
							<div className='col-lg-6'>
								<label htmlFor='phone'>Phone</label>
								<PhoneInput country='au' name='phone' onChange={changePhone} />
							</div>
							<div className='text-center'>
								<span>
									<button className='button mt-4' type='submit'>
										Request Estimate
									</button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default GetQuote;
