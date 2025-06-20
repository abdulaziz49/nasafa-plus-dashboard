import MenuIcon from "../icons/menu_icon.tsx";

const DrawerButton = () => {
    return (
        <label htmlFor="my-drawer-2"
               className="btn btn-primary drawer-button btn-square lg:hidden fixed top-3 start-3 z-2">
            <MenuIcon classes='size-8'/>
        </label>
    )
}

export default DrawerButton