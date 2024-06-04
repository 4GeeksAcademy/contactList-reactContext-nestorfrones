const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Contacts: [],

			contact: {
				name: "",
				phone: "",
				email: "",
				address: ""
			},


		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/contact/agendas/nestorfrones"
					);
					if (!response.ok) {
						throw new Error("no se pueden cargar")
					}
					const data = await response.json();
					setStore({
						Contacts: data.contacts
					})
				} catch (error) {
					console.log(error);
				}
			},

			postContact: async (inputName, inputPhone, inputEmail, inputAddress) => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/nestorfrones/contacts", {
					method: "POST",
					body: JSON.stringify({
						name: inputName,
						phone: inputPhone,
						email: inputEmail,
						address: inputAddress
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				if (response.ok) {
					alert("contacto creado correctamente")
				}else {
					alert("no se puede crear");
				}

			},

			// putContact: async (inputName, inputPhone, inputEmail, inputAddress) => {
			// 	const response = await fetch('https://playground.4geeks.com/contact/agendas/nestorfrones/contacts/' + `${store.id}`, {
			// 		method: "PUT",
			// 		body: JSON.stringify({
			// 			name: inputName,
			// 			phone: inputPhone,
			// 			email: inputEmail,
			// 			address: inputAddress
			// 		}),
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	})
			// 	if (response.ok) {
			// 		alert("contacto actualizado correctamente")
			// 	}else {
			// 		alert("no se puede actualizar");
			// 	}
			// },

			deleteContact: async (id) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/nestorfrones/contacts/' + `${id}`, {
					method: "DELETE",
				})
				if (!response.ok) {
					alert("no se puede eliminar");
				}
			},
		}
	};
};

export default getState;
