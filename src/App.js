import {
	Container,
	Row,
	Col,
	Image,
	FormControl,
	InputGroup,
} from 'react-bootstrap';

import './App.css';

function App() {
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
							<InputGroup className='mb-3 form-container'>
								<FormControl id='inlineFormInputGroup' placeholder='500' />
								<InputGroup.Text>μg</InputGroup.Text>
							</InputGroup>
						</div>
						<div className='d-flex align-items-center justify-content-between'>
							<p>Next Desired Dose:</p>
							<InputGroup className='mb-3 form-container'>
								<FormControl id='inlineFormInputGroup' placeholder='500' />
								<InputGroup.Text>μg</InputGroup.Text>
							</InputGroup>
						</div>
						<div className='d-flex align-items-center justify-content-between mb-3'>
							<p>Time Since Last Consumption:</p>
							<InputGroup className='mb-3 form-container'>
								<FormControl id='inlineFormInputGroup' placeholder='14' />
								<InputGroup.Text>days</InputGroup.Text>
							</InputGroup>
						</div>
					</Col>
					<Col>
						<div className='d-flex flex-column align-items-center mt-4'>
							<h6 className='my-3'>You will need a dose of</h6>
							<h5 className='mb-3 header-txt'>500μg</h5>
							<h6>to feel the same effects as your last dose</h6>
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
