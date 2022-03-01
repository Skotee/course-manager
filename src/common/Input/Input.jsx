import * as Styled from './Input.styles';

export const Input = ({
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
