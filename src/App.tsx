import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Courses/components/Login';
import Registration from './components/Courses/components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';
import {
	PageContainer,
	HeaderContainer,
	ContentContainer,
} from './layout/PageLayout';
import CourseInfo from './components/Courses/components/CourseInfo';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		localStorage.getItem('loginToken') !== null
			? setIsLoggedIn(true)
			: setIsLoggedIn(false);
	}, [isLoggedIn]);

	const MainRoute = () => {
		return isLoggedIn ? <Navigate to='/login' /> : <Navigate to='/courses' />;
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainRoute />} />
				<Route
					path='/registration' //zrobić tak by po wpisaniu tego urla by hand i posiadaniu tokena, nie przekierowało na ten register
					element={
						<PageContainer>
							<HeaderContainer>
								<Header />
							</HeaderContainer>
							<ContentContainer>
								<Registration />
							</ContentContainer>
						</PageContainer>
					}
				/>
				<Route
					path='/login'
					element={
						<PageContainer>
							<HeaderContainer>
								<Header />
							</HeaderContainer>
							<ContentContainer>
								<Login />
							</ContentContainer>
						</PageContainer>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PageContainer>
							<HeaderContainer>
								<Header />
							</HeaderContainer>
							<ContentContainer>
								<CreateCourse />
							</ContentContainer>
						</PageContainer>
					}
				/>
				<Route
					path='/courses' //TODO przemyśleć w jakich ewentualnościach byłoby to przekierowanie na /courses
					element={
						<PageContainer>
							<HeaderContainer>
								<Header />
							</HeaderContainer>
							<ContentContainer>
								<Courses />
							</ContentContainer>
						</PageContainer>
					}
				/>
				<Route
					path='/courses/:courseId'
					element={
						<PageContainer>
							<HeaderContainer>
								<Header />
							</HeaderContainer>
							<ContentContainer>
								<CourseInfo />
							</ContentContainer>
						</PageContainer>
					}
				/>
				<Route
					path='*'
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
