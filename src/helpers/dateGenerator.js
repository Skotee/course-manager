export const dateGenerator = () => {
	return (
		new Date().getDate() +
		'/' +
		(new Date().getMonth() + 1) +
		'/' +
		new Date().getFullYear()
	);
};
