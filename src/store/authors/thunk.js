import { url } from '../../services';
import { authorSaved } from './actionCreators';

export const authorSavedThunk =
	(token: any, name: any) => async (dispatch: any, getState: any) => {
		const request = await fetch(`${url}/authors/add`, {
			method: 'POST',
			body: JSON.stringify({ name }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const response = await request.json();
		const result = response.result;

		dispatch(authorSaved(result));
	};
