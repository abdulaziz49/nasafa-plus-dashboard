import Button from '../button.tsx';
import AddIcon from '../../icons/crud_icons/add_icon.tsx';
import type { CrudButtonType } from '../../../controllers/types/button_types.ts';

export default function AddButton({
	clickEvent,
	classes,
	text,
}: CrudButtonType) {
	return (
		<Button classes={classes} onClick={clickEvent}>
			{text} <AddIcon />
		</Button>
	);
}
