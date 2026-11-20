import { useState } from "react";

const TicketForm = () => {

	const ticketDefault = {
		name: "",
		language: "",
		urgency: "",
		updates: false,
		description: "",
	};

	const [ticketData, setTicketData] = useState(ticketDefault);

	//aggancio la funzione al form
	function handleForm(event) {
		event.preventDefault()
		console.log(ticketData)
	}

	function handleInput(event) {
		//verifico l'input
		const { name, type, value } = event.target;
		console.log(`Nome: "${name}" - Tipo ${type} - Valore: ${value}`);

		const nuovoStato = {
			...ticketData,
		};

		setTicketData(nuovoStato);
	}

	return (
		<div className="container mt-4">
			<h2>Richiesta apertura Ticket</h2>
			<div className="p-4 border rounded bg-light">
				<form onSubmit={handleForm}>
					{/* Nome */}
					<div className="mb-3">
						<label className="form-label">Nome</label>
						<input
							type="text"
							name="name"
							className="form-control"
							required
							onChange={handleInput}
						/>

					</div>

					{/* Selezione linguaggio */}
					<div className="mb-3">
						<label className="form-label">Linguaggio di programmazione</label>
						<select name="language" className="form-select" >
							<option value="HTML">HTML</option>
							<option value="CSS">CSS</option>
							<option value="JS">JavaScript</option>
							<option value="React">React</option>
							<option value="Express">Express</option>
							<option value="SQL">SQL</option>
						</select>
					</div>

					{/* Radio Urgenza */}
					<div className="mb-3">
						<label className="form-label">Livello di urgenza</label>
						<div>
							<div className="form-check">
								<input type="radio" name="urgency" value="low" id="urgencyLow" className="form-check-input" />
								<label className="form-check-label" htmlFor="urgencyLow">Bassa</label>
							</div>
							<div className="form-check">
								<input type="radio" name="urgency" value="medium" id="urgencyMedium" className="form-check-input" />
								<label className="form-check-label" htmlFor="urgencyMedium">Media</label>
							</div>
							<div className="form-check">
								<input type="radio" name="urgency" value="high" id="urgencyHigh" className="form-check-input" />
								<label className="form-check-label" htmlFor="urgencyHigh">Alta</label>
							</div>
						</div>
					</div>

					{/* Checkbox aggiornamenti */}
					<div className="mb-3 form-check">
						<input type="checkbox" name="updates" id="updates" className="form-check-input" />
						<label className="form-check-label" htmlFor="updates">Ricevi aggiornamenti sulla richiesta</label>
					</div>

					{/* Descrizione problema */}
					<div className="mb-3">
						<label className="form-label">Descrizione del problema</label>
						<textarea name="description" className="form-control" rows="4" required />
					</div>

					{/* Pulsante di invio */}
					<button type="submit" className="btn btn-primary">Invia richiesta</button>
				</form>
			</div>
		</div>
	);
};

export default TicketForm;
