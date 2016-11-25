export const user = (state = {}, action) => {
	switch (action.type) {
		case 'get':
			return { ...state, users: action.users }
	}
}