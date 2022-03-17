import React from 'react';

import * as Styled from './Input.styles';

interface InputProps {
	value?: string;
	inputId?: string;
	labelText: string;
	placeholderText: string;
	onChange?: any;
	type?: string;
	min?: number;
	minlength?: number;
	required?: boolean;
}

export const Input: React.FC<InputProps> = ({
	value,
	inputId,
	labelText,
	placeholderText,
	onChange,
	type,
	min,
	minlength,
	required,
}) => {
	return (
		<div>
			<label htmlFor={inputId}>{labelText}</label>
			<br />
			<Styled.Input
				value={value}
				placeholder={placeholderText}
				onChange={(e) => onChange(e)}
				id={inputId}
				type={type}
				min={min}
				minLength={minlength}
				required={required}
			/>
		</div>
	);
};
