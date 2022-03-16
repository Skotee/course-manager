import React, { MouseEventHandler } from 'react';

import * as Styled from './Button.styles';

interface ButtonProps {
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	buttonText: string;
	type?: string;
}

export const Button: React.FC<ButtonProps> = ({
	disabled,
	onClick,
	buttonText,
}) => {
	return (
		<Styled.Button disabled={disabled} onClick={onClick}>
			{buttonText}
		</Styled.Button>
	);
};
