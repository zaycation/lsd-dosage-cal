import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Image,
	Form,
	FormControl,
	InputGroup,
} from 'react-bootstrap';

import './App.css';

function App() {
	const [form, setForm] = useState({
		lastDose: 150,
		nextDose: 150,
		daysSince: 2,
		requiredDose: 0,
		doseType: 'μg',
		active1: 'active',
		active2: '',
		leftBtnColor: 'dark',
		rightBtnColor: 'outline-dark',
	});

	const updateForm = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	form.requiredDose =
		Math.round(
			((parseInt(form.lastDose) / 100) *
				280.059565 *
				Math.pow(parseInt(form.daysSince), -0.412565956) -
				parseInt(form.lastDose) +
				parseInt(form.nextDose)) /
				10,
		) * 10;

	return (
		<>
			<Container fluid className='main-bg'>
				<Row>
					<Col>
						<div className='header-div'>
							<h2 className='header-txt mt-3'>
								Tryptamine Tolerance Calculator
							</h2>
							<p className='subhheader-txt'>
								⚡️ developed by{' '}
								<a href='https://zaycation.dev/' className='anchor-link'>
									zaycation.dev
								</a>{' '}
								⚡️
							</p>
							<Image src='https://i.imgur.com/XI9AmNm.png' rounded />
						</div>
					</Col>
				</Row>
				<Row className='mt-5 mx-5 main-border'>
					<Col xs={12} md={6}>
						<div className='d-flex align-items-center justify-content-between mt-3'>
							<p>Last Dose:</p>
							<InputGroup className='mb-1 form-container'>
								<FormControl
									id='inlineFormInputGroup'
									value={form.lastDose}
									onChange={updateForm}
									name='lastDose'
									type='number'
								/>
								<InputGroup.Text>{form.doseType}</InputGroup.Text>
							</InputGroup>
						</div>
						<Form.Range
							className='mb-1 slide-color'
							value={form.lastDose}
							onChange={updateForm}
							name='lastDose'
							type='number'
							max={500}
							min={50}
						/>
						<div className='d-flex align-items-center justify-content-between'>
							<p>Next Desired Dose:</p>
							<InputGroup className='mb-1 form-container'>
								<FormControl
									id='inlineFormInputGroup'
									value={form.nextDose}
									onChange={updateForm}
									name='nextDose'
									type='number'
								/>
								<InputGroup.Text>{form.doseType}</InputGroup.Text>
							</InputGroup>
						</div>
						<Form.Range
							className='mb-1'
							value={form.nextDose}
							onChange={updateForm}
							name='nextDose'
							type='number'
							max={500}
							min={50}
						/>
						<div className='d-flex align-items-center justify-content-between mb-1'>
							<p>Time Since Last Consumption:</p>
							<InputGroup className='mb-1 form-container'>
								<FormControl
									id='inlineFormInputGroup'
									value={form.daysSince}
									onChange={updateForm}
									name='daysSince'
									type='number'
								/>
								<InputGroup.Text>days</InputGroup.Text>
							</InputGroup>
						</div>
						<Form.Range
							className='mb-1'
							value={form.daysSince}
							onChange={updateForm}
							name='daysSince'
							type='number'
							max={31}
							min={0}
						/>
					</Col>
					<Col>
						<div className='d-flex flex-column align-items-center mt-5'>
							<h5 className='my-3'>You will need a dose of</h5>
							<h3 className='mb-3 header-txt2'>
								{parseInt(form.requiredDose)}
								{form.doseType}
							</h3>
							<h5>
								to feel the proper effects of your{' '}
								<strong>next desired dose</strong>
							</h5>
							{/*
							<div className='d-flex align-items-center'>
								<Button
									variant={form.leftBtnColor}
									className='me-4'
									onClick={() => {
										setForm(
											form.leftBtnColor === 'dark' &&
												form.rightBtnColor === 'outline-dark' &&
												form.doseType === 'μg',
										);
									}}>
									LSD (μg)
								</Button>
								<Button
									variant={form.rightBtnColor}
									onClick={() => {
										setForm(
											form.leftBtnColor === 'outline-dark' &&
												form.rightBtnColor === 'dark' &&
												form.doseType === 'g',
										);
									}}>
									Shrooms (g)
								</Button>
							</div>
							*/}
						</div>
					</Col>
					<Col md={12} className='mt-3'>
						<p>
							Please note that this calculator is specifically for tryptamines
							like LSD and Mushrooms, do not use this calculator for a chemcial
							that isn't a tryptamine (it will not be accurate).
						</p>
						<p>
							This calculator is only able to provide an approximation. With
							that being said, this calculator also assumes that you know
							exactly how much LSD and Shrooms you have consumed. Always measure
							your mushies and make sure you have a reputable LSD vendor with
							accurate doses.
						</p>
						<p>
							As all bodies and brains are different, results may vary of course
							regarding tolerance. Use this calculator as a general rule of
							thumb.
						</p>
						<p>
							It is strongly suggested to let 2 weeks pass between each trip.
							For most people, tolerance should be back to normal after every 14
							days.
						</p>
						<p>Happy tripping, tryp family 🍄</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
