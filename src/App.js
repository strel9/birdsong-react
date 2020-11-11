import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import birdsData from './birdsData';

import Header from './components/Header';
import Body from './components/Body';
import Win from './components/Win';

const useStyles = makeStyles((theme) => ({
	root: {
		// backgroundColor: '#222222',
	},
}));

export default function App() {
	const [data, setData] = useState(birdsData);
	const [step, setStep] = useState(0);
	const [score, setScore] = useState(0);
	const [numberOfAttemps, setNumberOfAttemps] = useState(0);
	const [buttonIsActive, setButtonIsActive] = useState(false);

	const handleClickNext = () => {
		if (step < 6) {
			setStep(step + 1);
		}
		setNumberOfAttemps(0);
		setButtonIsActive(false);
	};

	const classes = useStyles();

	return (
		<Container fixed className={classes.root}>
			<Header step={step} score={score} />
			{/* <BrowserRouter> */}
			{/* <Switch> */}
			{/* <Route exact path="/" component={Step1}></Route> */}
			{step <= 5 ? (
				<Body
					data={data}
					step={step}
					score={score}
					setStep={setStep}
					setScore={setScore}
					numberOfAttemps={numberOfAttemps}
					setNumberOfAttemps={setNumberOfAttemps}
					buttonIsActive={buttonIsActive}
					setButtonIsActive={setButtonIsActive}
					handleClickNext={handleClickNext}></Body>
			) : (
				<Win score={score} />
			)}

			{/* <Route exact path="/step2" component={step2}></Route> */}
			{/* </Switch> */}
			{/* </BrowserRouter> */}
		</Container>
	);
}
