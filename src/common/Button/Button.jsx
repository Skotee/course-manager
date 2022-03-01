import * as Styled from './Button.styles';

export const Button = ({ disabled, onClick, buttonText }) => {
	return (
		<Styled.Button disabled={disabled} onClick={onClick}>
			{buttonText}
		</Styled.Button>
	);
};
