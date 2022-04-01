import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Login from './components/Courses/components/Login';
import Registration from './components/Courses/components/Registration/Registration';
import { Courses } from './components/Courses/Courses';
import { CourseForm } from './components/CourseForm/CourseForm';
import { Header } from './components/Header/Header';
import {
	PageContainer,
	HeaderContainer,
	ContentContainer,
} from './layout/PageLayout';
import CourseInfo from './components/Courses/components/CourseInfo';
import PrivateRoute from './components/PrivateRoute';
import { selectIsLoggedIn } from './selectors';
import { useCourses, useAuthors, url } from './services';
import { authorsLoaded } from './store/authors/actionCreators';
import { coursesLoaded } from './store/courses/actionCreators';
import { login } from './store/user/actionCreators';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(
		useSelector(selectIsLoggedIn) || !!localStorage.getItem('token')
	);

	const [coursesData, coursesLoading, coursesError] = useCourses();
	const [authorsData, authorsLoading, authorsError] = useAuthors();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(coursesLoaded(coursesData));
		dispatch(authorsLoaded(authorsData));
	}, [authorsData, coursesData, dispatch]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!!token) {
			const fetchData = async () => {
				const request = await fetch(`${url}/users/me`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: localStorage.getItem('token'),
					},
				});
				const response = await request.json();
				const result = response.result;
				const user = {
					name: result.name || 'admin',
					email: result.email,
					token: token,
					role: result.role,
				};
				dispatch(login(user));
			};
			fetchData();
		}
	}, [dispatch]);

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
								<Header
									isLoggedIn={isLoggedIn}
									onLogout={() => setIsLoggedIn(false)}
								/>
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
								<Header
									isLoggedIn={isLoggedIn}
									onLogout={() => setIsLoggedIn(false)}
								/>
							</HeaderContainer>
							<ContentContainer>
								<Login onLogin={() => setIsLoggedIn(true)} />
							</ContentContainer>
						</PageContainer>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<PageContainer>
								<HeaderContainer>
									<Header
										isLoggedIn={isLoggedIn}
										onLogout={() => setIsLoggedIn(false)}
									/>
								</HeaderContainer>
								<ContentContainer>
									<CourseForm isUpdate={true} />
								</ContentContainer>
							</PageContainer>
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm isUpdate={true} />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses' //TODO przemyśleć w jakich ewentualnościach byłoby to przekierowanie na /courses
					element={
						<PageContainer>
							<HeaderContainer>
								<Header
									isLoggedIn={isLoggedIn}
									onLogout={() => setIsLoggedIn(false)}
								/>
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
								<Header
									isLoggedIn={isLoggedIn}
									onLogout={() => setIsLoggedIn(false)}
								/>
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
