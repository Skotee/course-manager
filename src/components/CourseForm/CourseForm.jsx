import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
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
import { selectUser, selectAuthors, searchCoursesById } from '../../selectors';
import {
	courseSavedThunk,
	courseUpdatedThunk,
} from '../../store/courses/thunk';
import { authorSavedThunk } from '../../store/authors/thunk';

import * as Styled from './CourseForm.styles';

const mapAuthorsFromId = (allAuthors, authorIds) => {
	return authorIds.map((id) => allAuthors.find((a) => a.id === id));
};

export const CourseForm = ({ isUpdate }) => {
	const authors = useSelector(selectAuthors);
	const { courseId } = useParams();
	const user = useSelector(selectUser);
	const authorsList = useSelector(selectAuthors);
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const courseToUpdate = useSelector(searchCoursesById(courseId));
	const [courseAuthors, setCourseAuthors] = useState(
		isUpdate ? mapAuthorsFromId(authors, courseToUpdate.authors) : []
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const inputAuthorName = useRef('');
	const [formData, setFormData] = useState(
		isUpdate
			? { ...courseToUpdate }
			: { title: '', description: '', duration: 0 }
	);
	const handleCreateNewAuthor = (e) => {
		e.preventDefault();
		const newAuthorName = inputAuthorName.current.value;
		if (
			newAuthorName?.length &&
			!authors.find((existingAuthor) => newAuthorName === existingAuthor.name)
		) {
			dispatch(authorSavedThunk(user.token, newAuthorName));
		}
	};

	const handleAddAuthorToNewCourse = (authorID, authorName) => {
		const newCourseAuthor = { name: authorName, id: authorID };
		setAvailableAuthors(
			availableAuthors.filter((author) => author.id !== authorID)
		);
		setCourseAuthors([...courseAuthors, newCourseAuthor]);
	};

	const handleDeleteAuthorFromCourse = (author) => {
		// let courseAuthorNames = courseAuthors.map((author) => author.name);
		// if (!courseAuthorNames.find((authorName) => author.name === authorName)) {
		// 	setCourseAuthors([...courseAuthors, author]);
		// }
		let deleteAuthor = courseAuthors.filter((auth) => auth.id !== author.id);
		setCourseAuthors(deleteAuthor);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const createNewCourse = () => {
		if (!checkForErrors()) {
			alert(ALERTS.followInstructions);
		} else {
			const newCourse = {
				id: formData.id || uuidv4(),
				title: formData.title,
				description: formData.description,
				creationDate: dateGenerator(),
				duration: formData.duration,
				authors: courseAuthors?.map((author) => author.id),
			};
			isUpdate
				? dispatch(
						courseUpdatedThunk(
							user.token,
							courseId,
							newCourse.title,
							newCourse.description,
							Number.parseInt(newCourse.duration),
							newCourse.authors
						)
				  )
				: dispatch(
						courseSavedThunk(
							user.token,
							newCourse.title,
							newCourse.description,
							Number.parseInt(newCourse.duration),
							newCourse.authors
						)
				  );
			navigate('/courses');
		}
	};

	const checkForErrors = () => {
		if (
			formData.title === '' ||
			formData.description === '' ||
			formData.duration === 0
		) {
			alert(ALERTS.fillInputs);
			return false;
		} else if (formData.description.length < 2) {
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
							onChange={handleInputChange}
							value={formData.title}
							required
						/>
						<Button
							buttonText={
								isUpdate ? 'Update course' : BUTTONS_TEXTS.createCourse
							}
							onClick={createNewCourse}
							type='submit'
						/>
					</Styled.TwoColumnsContainer>
					<label htmlFor={'textarea'}>{LABELS.description}</label>
					<br />
					<Styled.Textarea
						id={'textarea'}
						placeholder={PLACEHOLDERS.enterDescription}
						onChange={handleInputChange}
						value={formData.description}
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
							inputRef={inputAuthorName}
							inputId='search'
							minlength={2}
							type='text'
						/>
						<br />
						<Button
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
							minlength={1}
							type='number'
							min={1}
							onChange={handleInputChange}
							value={formData.duration}
							required
						/>
						<br />
						<br />
						<Typography>
							Duration: <b>{pipeDuration(formData.duration)}</b> hours
						</Typography>
					</div>
					<div>
						{/*  Course authors list section */}
						<Styled.SectionHeader>{HEADERS.courseAuthors}</Styled.SectionHeader>
						<ul>
							{courseAuthors?.length ? (
								courseAuthors.map((author) => {
									return (
										<Styled.ListItem key={author.id}>
											<Styled.AuthorName>{author.name}</Styled.AuthorName>
											<Button
												buttonText={BUTTONS_TEXTS.deleteAuthor}
												onClick={() => handleDeleteAuthorFromCourse(author)}
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
