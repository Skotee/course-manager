import { mockedAuthorsList } from '../constants';

export const getCourseAuthorsName = (
	courseAuthorsIDs: string | any[] | any
) => {
	const authorsListArray = mockedAuthorsList
		.filter((author: { id: string }) => courseAuthorsIDs.includes(author.id))
		.map((author: { name: any }) => author.name)
		.join(', ');
	return authorsListArray;
};
