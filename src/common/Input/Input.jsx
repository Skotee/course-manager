import styled from '@emotion/styled';

// const StyledImg = styled.img`
// 	height: 200px;
// `;

export const Input = ({ labelText, placeholderText, onChange }) => {
	return (
		<>
			<label>{labelText}</label>
			<input placeholder={placeholderText} onChange={onChange} />
		</>
	);
};
