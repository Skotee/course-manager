import { useState } from 'react';

import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import {
	PageContainer,
	HeaderContainer,
	ContentContainer,
} from './layout/PageLayout';

function App() {
	const [isCreatingCourse, setIsCreatingCourse] = useState(false);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [coursesList, setCoursesList] = useState(mockedCoursesList);

	return (
		<PageContainer>
			<HeaderContainer>
				<Header />
			</HeaderContainer>
			<ContentContainer>
				{isCreatingCourse ? (
					<CreateCourse
						authorsList={authorsList}
						setAuthorsList={setAuthorsList}
						setCourses={setCoursesList}
						setIsCreatingCourse={setIsCreatingCourse}
					/>
				) : (
					<Courses
						authorsList={authorsList}
						coursesList={coursesList}
						onClick={() => setIsCreatingCourse(true)}
					/>
				)}
			</ContentContainer>
		</PageContainer>
	);
}
export default App;
