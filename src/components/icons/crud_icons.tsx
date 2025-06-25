import {MdAdd} from "react-icons/md";
import {MdEdit} from "react-icons/md";
import {MdDelete} from "react-icons/md";
import {MdRefresh} from "react-icons/md";
import {MdPrint} from "react-icons/md";
import {RiFileExcel2Fill} from "react-icons/ri"
import {MdPictureAsPdf} from "react-icons/md";
import {FaUnlockKeyhole} from "react-icons/fa6";
import type {IconsType} from "./icons_type.ts";

export const AddIcon = ({classes}: IconsType) => <MdAdd className={`${classes}`}/>

export const EditIcon = ({classes}: IconsType) => <MdEdit className={`${classes}`}/>

export const DeleteIcon = ({classes}: IconsType) => <MdDelete className={`${classes}`}/>

export const RefreshIcon = ({classes}: IconsType) => <MdRefresh className={`${classes}`}/>

export const PrintIcon = ({classes}: IconsType) => <MdPrint className={`${classes}`}/>

export const ExcelIcon = ({classes}: IconsType) => <RiFileExcel2Fill className={`${classes}`}/>

export const PDFIcon = ({classes}: IconsType) => <MdPictureAsPdf className={`${classes}`}/>

export const RemovePasswordIcon = ({classes}: IconsType) => <FaUnlockKeyhole className={`${classes}`}/>
