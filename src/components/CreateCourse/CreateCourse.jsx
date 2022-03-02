import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { pipeDuration, dateGenerator } from '../../helpers';
import {
	ALERTS,
	BUTTONS_TEXTS,
	HEADERS,
	LABELS,
	PLACEHOLDERS,
} from '../../constants';

import * as Styled from './CreateCourse.styles';

export const CreateCourse = ({
	authorsList,
	setAuthorsList,
	setCourses,
	setIsCreatingCourse,
}) => {
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [addAuthorInput, setAddAuthorInput] = useState('');
	const [customAuthor, setCustomAuthor] = useState({});
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleCreateNewAuthor = (e) => {
		e.preventDefault();
		const newAuthor = {
			id: uuidv4(),
			name: addAuthorInput,
		};
		setCustomAuthor({
			id: newAuthor.id,
			name: newAuthor.name,
		});

		setAvailableAuthors([...availableAuthors, newAuthor]);
	};

	const handleAddAuthorToNewCourse = (authorID, authorName) => {
		const newCourseAuthor = { name: authorName, id: authorID };
		setAvailableAuthors(
			availableAuthors.filter((author) => author.id !== authorID)
		);
		setCourseAuthors([...courseAuthors, newCourseAuthor]);
	};

	const handleDeleteAuthorFromCourse = (authorID, authorName) => {
		const courseAuthorToDelete = { name: authorName, id: authorID };
		setAvailableAuthors([...availableAuthors, courseAuthorToDelete]);
		setCourseAuthors(courseAuthors.filter((author) => author.id !== authorID));
	};

	const createNewCourse = () => {
		if (!checkForErrors()) {
			alert(ALERTS.followInstructions);
		} else {
			const newCourse = {
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: dateGenerator(),
				duration: duration,
				authors: courseAuthors.map((author) => author.id),
			};
			setCourses((prevCourse) => {
				return [...prevCourse, newCourse];
			});
			setAuthorsList((prevAuthorsList) => {
				return [...prevAuthorsList, customAuthor];
			});
			setIsCreatingCourse(false);
		}
	};

	const checkForErrors = () => {
		if (title === '' || description === '' || duration === '') {
			alert(ALERTS.fillInputs);
			return false;
		} else if (description.length < 2) {
			alert(ALERTS.descriptionInfo);
			return false;
		} else if (courseAuthors.length === 0) {
			alert(ALERTS.atLeastAuthor);
			return false;
		} else return true;
	};

	return (
		<>
			<Styled.Form onSubmit={(e) => e.preventDefault()}>
				<div>
					<Styled.TwoColumnsContainer>
						<Input
							placeholderText={PLACEHOLDERS.enterTitle}
							labelText={LABELS.title}
							type='text'
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
						<Button
							buttonText={BUTTONS_TEXTS.createCourse}
							onClick={createNewCourse}
							type='submit'
						/>
					</Styled.TwoColumnsContainer>
					<label htmlFor={'textarea'}>{LABELS.description}</label>
					<br />
					<Styled.Textarea
						id={'textarea'}
						placeholder={PLACEHOLDERS.enterDescription}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
				<br />
				<Styled.AddAuthorContainer>
					<Styled.CenterContainer>
						{/* add author section */}
						<Styled.SectionHeader>{HEADERS.addAuthor}</Styled.SectionHeader>
						<Input
							labelText={LABELS.authorName}
							placeholderText={PLACEHOLDERS.enterAuthorName}
							value={addAuthorInput}
							onChange={(e) => setAddAuthorInput(e.target.value)}
							inputId='search'
							minlength='2'
							type='text'
						/>
						<br />
						<Button
							disabled={!addAuthorInput}
							buttonText={BUTTONS_TEXTS.createAuthor}
							onClick={handleCreateNewAuthor}
						/>
					</Styled.CenterContainer>
					<div>
						<Styled.SectionHeader>{HEADERS.authors}</Styled.SectionHeader>
						<ul>
							{/*  authors list  section */}
							{availableAuthors.length ? (
								availableAuthors.map((author) => {
									return (
										<Styled.ListItem key={author.id}>
											<Styled.AuthorName>{author.name}</Styled.AuthorName>
											<Button
												buttonText={BUTTONS_TEXTS.addAuthor}
												onClick={() =>
													handleAddAuthorToNewCourse(author.id, author.name)
												}
											/>
										</Styled.ListItem>
									);
								})
							) : (
								<Typography>{ALERTS.noAuthors}</Typography>
							)}
						</ul>
					</div>
					<div>
						{/* duration section */}
						<Styled.SectionHeader>{HEADERS.duration}</Styled.SectionHeader>
						<Input
							labelText={LABELS.duration}
							placeholderText={PLACEHOLDERS.enterDuration}
							inputId='duration'
							minlength='1'
							type='number'
							min='1'
							onChange={(e) => setDuration(e.target.value)}
							required
						/>
						<br />
						<br />
						<Typography>
							Duration: <b>{pipeDuration(duration)}</b> hours
						</Typography>
					</div>
					<div>
						{/*  Course authors list section */}
						<Styled.SectionHeader>{HEADERS.courseAuthors}</Styled.SectionHeader>
						<ul>
							{courseAuthors.length ? (
								courseAuthors.map((author) => {
									return (
										<Styled.ListItem key={author.id}>
											<Styled.AuthorName>{author.name}</Styled.AuthorName>
											<Button
												buttonText={BUTTONS_TEXTS.deleteAuthor}
												onClick={() =>
													handleDeleteAuthorFromCourse(author.id, author.name)
												}
											/>
										</Styled.ListItem>
									);
								})
							) : (
								<Typography>{ALERTS.noAuthorsChosen}</Typography>
							)}
						</ul>
					</div>
				</Styled.AddAuthorContainer>
			</Styled.Form>
		</>
	);
};
