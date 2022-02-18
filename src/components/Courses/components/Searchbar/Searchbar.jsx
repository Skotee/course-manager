import styled from '@emotion/styled';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';

// const StyledImg = styled.img`
// 	height: 200px;
// `;

export const SearchBar = () => {
	return (
		<>
			<Input />
			<Button />
		</>
	);
};

// Add functionality for searching courses:

// User should have ability to search course by title and id;
// The search is performed by the occurrence of characters in the string, and not just by a match at the beginning of the string;
// Case-insensitive search;
// When user clicks on Search button it displays all courses that match the search query;
// All courses are displayed when user cleans search field.
