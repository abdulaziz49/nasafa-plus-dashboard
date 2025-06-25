import {FaHouseUser} from 'react-icons/fa6';
import {FaUserGroup} from 'react-icons/fa6';
import {FaCircleUser} from 'react-icons/fa6';
import {FaUserShield} from 'react-icons/fa6';
import type {IconsType} from '../icons_type.ts';

export const UserAccordionIcon = ({classes}: IconsType) => <FaHouseUser className={`${classes}`}/>

export const UserGroupIcon = ({classes}: IconsType) => <FaUserGroup className={`${classes}`}/>

export const UserIcon = ({classes}: IconsType) => <FaCircleUser className={`${classes}`}/>

export const UserPermissionIcon = ({classes}: IconsType) => <FaUserShield className={`${classes}`}/>