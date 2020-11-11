import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '200px',
		height: '200px',
	},
	img: {
		borderRadius: '10%',
		objectFit: 'cover',
		width: '100%',
		height: '100%',
	},
}));

export default function Image({ data }) {
	const classes = useStyles();

	return (
		//
		<div className={classes.root}>
			<img className={classes.img} src={data && data.image} alt={data && data.name} />
		</div>
	);
}
