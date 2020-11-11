import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import Question from './Question';
import AnswersVariants from './AnswersVariants';
import AnswerCard from './AnswerCard';

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	backgroundColor: '#222222',
	// },
	btn: {
		backgroundColor: '#008966',
		color: 'white',
		marginBottom: '20px',
	},
	answerBlock: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	answerVariants: {},
	answerCard: {},
}));

export default function Step({
	data,
	step,
	score,
	setScore,
	numberOfAttemps,
	setNumberOfAttemps,
	buttonIsActive,
	setButtonIsActive,
	handleClickNext,
}) {
	const [correctNumberOfAnswer, setCorrectNumberOfAnswer] = useState();
	const [clickVariantItem, setClickVariantItem] = useState();

	useEffect(() => {
		setCorrectNumberOfAnswer(randomValue());
	}, []);

	const randomValue = () => {
		return Math.floor(Math.random() * 6) + 1;
	};

	const getAnswerFromDataStep = (whatFind) => data[step].filter((item) => item.id === whatFind);

	const scoreAnswer = () => {
		if (numberOfAttemps === 0) {
			setScore(score + 5);
		} else if (numberOfAttemps === 1) {
			setScore(score + 4);
		} else if (numberOfAttemps === 2) {
			setScore(score + 3);
		} else if (numberOfAttemps === 3) {
			setScore(score + 2);
		} else if (numberOfAttemps === 4) {
			setScore(score + 1);
		} else {
			setScore(score + 0);
		}
	};

	const handeClickAnswers = (value, key) => {
		setClickVariantItem(getAnswerFromDataStep(value)[0]);

		if (value === key) {
			scoreAnswer();
			setButtonIsActive(true);
		} else {
			if (numberOfAttemps < 5) {
				setNumberOfAttemps(numberOfAttemps + 1);
			}
		}
	};

	const classes = useStyles();

	return (
		<>
			<Question dataOfAnswer={getAnswerFromDataStep(correctNumberOfAnswer)[0]} />

			<Button
				className={classes.btn}
				disabled={!buttonIsActive}
				fullWidth
				onClick={handleClickNext}
				variant="contained">
				NEXT
			</Button>

			<div className={classes.answerBlock}>
				<AnswersVariants
					className={classes.answerVariants}
					correctNumberOfAnswer={correctNumberOfAnswer}
					dataOfStep={data[step]}
					handeClickAnswers={handeClickAnswers}
				/>
				<AnswerCard
					className={classes.answerCard}
					correctNumberOfAnswer={correctNumberOfAnswer}
					dataOfStep={data[step]}
					clickVariantItem={clickVariantItem}
				/>
			</div>
		</>
	);
}
