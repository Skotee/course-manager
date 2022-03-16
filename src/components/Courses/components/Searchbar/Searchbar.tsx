import { MouseEventHandler, SetStateAction } from 'react';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import { BUTTONS_TEXTS, LABELS, PLACEHOLDERS } from '../../../../constants';

import * as Styled from './Searchbar.styles';

interface SearchBarProps {
	onClick: MouseEventHandler<HTMLButtonElement>;
	value: string;
	onChange: (e: { target: { value: SetStateAction<string> } }) => void;
}

export const SearchBar = ({
	onClick,
	value,
	onChange,
}: SearchBarProps): JSX.Element => {
	return (
		<Styled.Form>
			<Input
				labelText={LABELS.searchBy}
				placeholderText={PLACEHOLDERS.enterCourse}
				onChange={onChange}
				inputId='search'
				value={value}
			/>
			<Button
				disabled={!value}
				type={'button'}
				buttonText={BUTTONS_TEXTS.search}
				onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
					e.preventDefault();
					onClick(e);
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
