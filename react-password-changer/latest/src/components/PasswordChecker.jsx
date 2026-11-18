import { useState } from 'react'

export default function PasswordChecker() {
	const [pass1, setPass1] = useState('')
	const [pass2, setPass2] = useState('')
	const [result, setResult] = useState(null)

	const inputCheck = () => {
		/* qui facciamo il confronto delle password e stampiamo il messaggio */
		/* operatore ternario ? */
		if (pass1 === pass2 && pass1 !== '') {
			setResult(`Password cambiata. Lunghezza: ${pass1.length}`)
		} else {
			setResult('Le password non coincidono')
		}
		setPass1('')
		setPass2('')
	}
	/* commento */
	return (
		<div>
			Password
			<input
				type="password"
				value={pass1}
				onChange={(e) => setPass1(e.target.value)}
			/>
			Cambia password
			<input
				type="password"
				value={pass2}
				onChange={(e) => setPass2(e.target.value)}
			/>

			<button onClick={inputCheck}>controlla password</button>

			{result && <p>{result}</p>}
		</div>
	)
}
