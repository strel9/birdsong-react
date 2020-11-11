import React from 'react';
import { Button, Paper, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '48%',
		// 	backgroundColor: '#222222',
	},
	btnWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	btn: {
		// border: ('2px', 'black', 'solid'),
		justifyContent: 'flex-start',
	},
}));

export default function AnswersVariantsBlock({
	correctNumberOfAnswer,
	dataOfStep,
	handeClickAnswers,
}) {
	const classes = useStyles();

	// console.log(...getCorrectAnswer());

	return (
		<Paper className={classes.root}>
			<List className={classes.btnWrapper}>
				{dataOfStep.map((item) => (
					<>
						<ListItem
							button
							// color="secondary"
							// color="primary"
							// startIcon={<FiberManualRecordIcon color={`action`} />}
							className={classes.btn}
							onClick={() => handeClickAnswers(item.id, correctNumberOfAnswer)}>
							{item.name}
						</ListItem>
						<Divider />
					</>
				))}
			</List>
		</Paper>
	);
}
