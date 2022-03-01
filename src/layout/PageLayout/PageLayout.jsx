import * as Styled from './PageLayout.styles';

export const PageContainer = ({ children }) => {
	return <Styled.PageContainer>{children}</Styled.PageContainer>;
};

export const HeaderContainer = ({ children }) => {
	return <Styled.HeaderContainer>{children}</Styled.HeaderContainer>;
};

export const ContentContainer = ({ children }) => {
	return <Styled.ContentContainer>{children}</Styled.ContentContainer>;
};
