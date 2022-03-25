export const getCourseAuthorsName = (
	courseAuthorsIDs: string | any[] | any,
	authorsList: any[]
) => {
	const authorsListArray = authorsList
		.filter((author: { id: string }) => courseAuthorsIDs.includes(author.id))
		.map((author: { name: any }) => author.name)
		.join(', ');
	return authorsListArray;
};
