import React from 'react';
import { AppBar, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		// backgroundColor: '#222222',
	},
	headerTop: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '30px',
		// width: '200px',
		// backgroundColor: 'red',
	},
	btnGroup: {
		// flexBasis: '100%',
		// width: '100%',
		marginBottom: '30px',
		display: 'flex',
	},
	btn: {
		// display: 'flex',
		backgroundColor: '#008966',
	},
}));

export default function Header({ step, score }) {
	const classes = useStyles();
	const menuItems = [
		'Разминка',
		'Воробьиные',
		'Лесные птицы',
		'Певчие птицы',
		'Хищные птицы',
		'Морские птицы',
	];

	// const isStepDisabled = (index) => {
	// 	if (index === step) {
	// 		return true;
	// 	}
	// };

	return (
		<>
			<div className={classes.headerTop}>
				<div>LOGO</div>
				<div>{`Score:${score}`}</div>
			</div>
			<ButtonGroup
				fullWidth
				className={classes.btnGroup}
				variant="contained"
				color="primary"
				aria-label="contained primary button group">
				{menuItems.map((item, index) => (
					<Button disabled={index !== step && true} className={classes.btn}>
						{item}
					</Button>
				))}
			</ButtonGroup>
		</>
	);
}
