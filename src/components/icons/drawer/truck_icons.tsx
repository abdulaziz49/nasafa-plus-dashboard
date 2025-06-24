import {FaTruckFront} from "react-icons/fa6";
import {HiTruck} from "react-icons/hi2";
import { GiTruck } from "react-icons/gi";
import type {IconsType} from '../icons_type.ts';

export const TruckAccordionIcon = ({classes}: IconsType) => {
    return <FaTruckFront className={`${classes}`}/>;
};

export const TruckGroupManagementIcon = ({classes}: IconsType) => {
    return <HiTruck className={`${classes}`}/>;
};

export const TruckManagementIcon = ({classes}: IconsType) => {
    return <GiTruck className={`${classes}`}/>;
};
