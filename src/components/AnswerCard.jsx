import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image';
import Player from './Player';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '48%',
		display: 'flex',
		flexDirection: 'column',
		// backgroundColor: '#222222',
	},
	top: {
		display: 'flex',
		height: '50%',
		marginBottom: 20,
	},
	bodyImage: {
		width: '50px',
		height: '50px',
		borderRadius: '10%',
	},
	bodyRight: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bodyTitle: {
		fontSize: 30,
	},
	bodyTitleTranslate: {
		fontSize: 20,
	},
	bodyDescription: {
		height: '50%',
	},
}));

export default function AnswerCard({ clickVariantItem }) {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			{clickVariantItem ? (
				<>
					<div className={classes.top}>
						<Image data={clickVariantItem} />
						{/* <img
							className={classes.bodyImage}
							src={clickVariantItem && clickVariantItem.image}
							alt={clickVariantItem && clickVariantItem.name}
						/> */}
						<div className={classes.bodyRight}>
							<div className={classes.bodyTitle}>{clickVariantItem && clickVariantItem.name}</div>
							<div className={classes.bodyTitleTranslate}>
								{clickVariantItem && clickVariantItem.species}
							</div>
							<Player
								className={classes.bodyPlayer}
								audio={clickVariantItem && clickVariantItem.audio}
							/>
						</div>
					</div>
					<Typography className={classes.bodyDescription}>
						{clickVariantItem && clickVariantItem.description}
					</Typography>
				</>
			) : (
				<>
					<div>Послушайте плеер</div>
					<div>Выберите птицу из списка</div>
				</>
			)}
		</Paper>
	);
}
