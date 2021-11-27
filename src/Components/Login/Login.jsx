import './Login.scss';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

import LogoIcon from '../../Components/Lib/LogoIcon.jsx';

import useToken from '../../Hooks/useToken.js';

const useStyles = makeStyles({
	loginButton: {
		textAlign: 'center',
	},
});

function Login() {
	const classes = useStyles();
	const [setToken] = useToken(true);

	return (
		<>
			<div className='login'>
				<div className='login__inner'>
					<LogoIcon />

					<h2 className='login__heading'>Log in</h2>

					<form
						className='login__form'
						onSubmit={(evt) => {
							evt.preventDefault();
							const { email, password } = evt.target.elements;

							setToken({
								email: email.value,
								password: password.value,
							});
						}}>
						<TextField
							type='text'
							label='Email:'
							name='email'
							autoComplete='on'
						/>

						<TextField
							type='password'
							label='Password:'
							name='password'
							autoComplete='on'
						/>

						<Button
							className={classes.loginButton}
							type='submit'
							variant='contained'>
							Log In
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
