import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';

export const AntSwitch = styled(Switch)(({ theme }) => ({
	width: 40,
	height: 20,
	padding: 0,
	borderRadius: '30px',
	display: 'flex',
	'&:active': {
		'& .MuiSwitch-thumb': {
			width: 15,
		},
		'& .MuiSwitch-switchBase.Mui-checked': {
			transform: 'translateX(9px)',
		},
	},
	'& .MuiSwitch-switchBase': {
		left: 1,
		padding: 2,
		'&.Mui-checked': {
			transform: 'translateX(12px)',
			color: '#fff',
			right: 5,
			'& + .MuiSwitch-track': {
				opacity: 1,
				backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
		width: 15,
		height: 15,
		borderRadius: 50,
		transition: theme.transitions.create(['width'], {
			duration: 200,
		}),
	},
	'& .MuiSwitch-track': {
		borderRadius: 16 / 2,
		opacity: 1,
		backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
		boxSizing: 'border-box',
	},
}));
