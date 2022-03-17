import * as Styled from './PageLayout.styles';

const PageContainer: React.FC = ({ children }) => {
	return <Styled.PageContainer>{children}</Styled.PageContainer>;
};

const HeaderContainer: React.FC = ({ children }) => {
	return <Styled.HeaderContainer>{children}</Styled.HeaderContainer>;
};

const ContentContainer: React.FC = ({ children }) => {
	return <Styled.ContentContainer>{children}</Styled.ContentContainer>;
};

export { PageContainer, HeaderContainer, ContentContainer };
