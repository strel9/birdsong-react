import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

export default function Win({ score }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>Поздравляем</div>
			<div>{`Вы набрали ${score} баллов из 30 возможных`}</div>
			<div>Кнопка РЕСТАРТ</div>
		</div>
	);
}
