import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

import * as Styled from './Searchbar.styles';

export const SearchBar = ({ onClick, value, onChange }) => {
	return (
		<Styled.Form>
			<Input
				labelText={'Search by title or by id'}
				placeholderText={'Enter course name...'}
				onChange={onChange}
				inputId='search'
				value={value}
			/>
			<Button
				disabled={!value}
				type={'button'}
				buttonText={'Search'}
				onClick={(e) => {
					e.preventDefault();
					onClick();
				}}
			></Button>
		</Styled.Form>
	);
};

// Add functionality for searching courses:

// User should have ability to search course by title and id;
// The search is performed by the occurrence of characters in the string, and not just by a match at the beginning of the string;
// Case-insensitive search;
// When user clicks on Search button it displays all courses that match the search query;
// All courses are displayed when user cleans search field.

// Add functionality for searching courses:
// User should have ability to search course by title and id;
// The search is performed by the occurrence of characters in the string, and not just by a match at the
// beginning of the string;
// Case-insensitive search;
// When user clicks on Search button it displays all courses that match the search query;
// All courses are displayed when user cleans search field.
// (Search by title example)

//Implement searching functionality by title. Reset search result when searchbar is empty.
//Implement searching functionality by id. Reset search result when searchbar is empty
