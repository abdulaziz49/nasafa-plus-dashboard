import Button from "../button.tsx"
import {useNavigate} from "react-router-dom";
import SettingsIcon from "../../icons/drawer/settings_icon.tsx";

const SettingsButton = () => {
    const navigate = useNavigate()
    return (
        <Button
            classes="bg-transparent border-none shadow-none text-primary-content"
            onClick={() => {
                navigate('/')
            }}
        >
            <SettingsIcon/> Settings
        </Button>
    )
}

export default SettingsButton