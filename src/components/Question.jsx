import React from 'react';
import Player from './Player';
import { Grid, Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: '20px',
		marginBottom: '20px',
	},
	imgWrapper: {
		flexGrow: 1,
	},
	body: {
		display: 'flex',
		flexGrow: 11,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bodyTitleWrapper: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
	bodyTitle: {
		fontSize: 40,
	},
	bodyPlayer: {
		width: '50%',
	},
}));

export default function Question({ dataOfAnswer }) {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<div className={classes.imgWrapper}>
				<Image data={dataOfAnswer} />
			</div>
			<div className={classes.body}>
				<div className={classes.bodyTitleWrapper}>
					<Typography className={classes.bodyTitle}>{dataOfAnswer && dataOfAnswer.name}</Typography>
				</div>
				<Divider />

				<Player className={classes.bodyPlayer} audio={dataOfAnswer && dataOfAnswer.audio} />
			</div>
		</Paper>
	);
}
