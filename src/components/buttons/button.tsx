import type { ButtonType } from '../../types/button_types.ts';

const Button = ({
	children,
	classes,
	type,
	...rest
}: ButtonType) => {
	return (
		<button type={type} className={'btn ' + classes} {...rest} >
			{children}
		</button>
	);
};

export default Button;
