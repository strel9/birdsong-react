import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => {
	return {
		root: {
			[theme.breakpoints.down('sm')]: {
				width: '100%',
			},
		},
		loopIcon: {
			color: '#3f51b5',
			'&.selected': {
				color: '#0921a9',
			},
			'&:hover': {
				color: '#7986cb',
			},
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
		playIcon: {
			color: '#008966',
			'&:hover': {
				color: '#E0E0E0',
			},
		},
		// replayIcon: {
		// 	color: '#e6e600',
		// },
		pauseIcon: {
			color: '#008966',
		},
		volumeIcon: {
			color: 'rgba(0, 0, 0, 0.54)',
		},
		volumeSlider: {
			color: '#E0E0E0',
		},
		progressTime: {
			color: 'rgba(0, 0, 0, 0.54)',
		},
		mainSlider: {
			color: '#3f51b5',
			'& .MuiSlider-rail': {
				color: '#7986cb',
			},
			'& .MuiSlider-track': {
				color: '#3f51b5',
			},
			'& .MuiSlider-thumb': {
				color: 'rgba(0, 0, 0, 0.54)',
			},
		},
	};
});

export default function Player({ audio }) {
	const classes = useStyles();

	return (
		// <ThemeProvider theme={muiTheme}>
		<AudioPlayer
			className={classes.root}
			// width="100%"
			// height="50%"
			useStyles={useStyles}
			src={audio}
			loop={false}
		/>
		// </ThemeProvider>
	);
}
