import styled from '@emotion/styled';
import { Input } from '../../common/Input/Input';

// const StyledImg = styled.img`
// 	height: 200px;
// `;

export const CreateCourse = ({ labelText, placeholderText, onChange }) => {
	return (
		<>
			<Input>{labelText}</Input>
			<textarea />
		</>
	);
};
