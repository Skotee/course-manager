import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
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
import { getAuthorsList } from '../../selectors';
import { addAuthor } from '../../store/authors/actionCreators';
import { addCourse } from '../../store/courses/actionCreators';

import * as Styled from './CourseForm.styles';

export const CourseForm = (): JSX.Element => {
	const authorsList = useSelector(getAuthorsList);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([] as any[]);
	const [addAuthorInput, setAddAuthorInput] = useState('');
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleCreateNewAuthor = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const newAuthor = {
			id: uuidv4(),
			name: addAuthorInput,
		};
		setAvailableAuthors([...availableAuthors, newAuthor]);
		dispatch(addAuthor(newAuthor));
	};

	const handleAddAuthorToNewCourse = (authorID: number, authorName: string) => {
		const newCourseAuthor = { name: authorName, id: authorID };
		setAvailableAuthors(
			availableAuthors.filter(
				(author: { id: number }) => author.id !== authorID
			)
		);
		setCourseAuthors([...courseAuthors, newCourseAuthor]);
	};

	const handleDeleteAuthorFromCourse = (authorID: any, authorName: any) => {
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
			dispatch(addCourse(newCourse));
			navigate('/courses', { replace: true });
		}
	};

	const checkForErrors = () => {
		if (title === '' || description === '' || duration === 0) {
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
							onChange={(e: {
								target: { value: React.SetStateAction<string> };
							}) => setTitle(e.target.value)}
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
							onChange={(e: {
								target: { value: React.SetStateAction<string> };
							}) => setAddAuthorInput(e.target.value)}
							inputId='search'
							minlength={2}
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
								availableAuthors.map((author: { id: number; name: string }) => {
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
							minlength={1}
							type='number'
							min={1}
							onChange={(e: {
								target: { value: React.SetStateAction<number> };
							}) => setDuration(e.target.value)}
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
