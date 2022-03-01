import styled from '@emotion/styled';

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	height: 200px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 75%;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;
