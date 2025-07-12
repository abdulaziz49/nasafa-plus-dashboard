import { DeleteIcon, EditIcon } from "../icons/crud_icons";

type Group = {
  id: number;
  code: string;
  name: string;
};

const groupData: Group[] = [
  { id: 1, code: "Cy Ganderton", name: "Quality Control Specialist" },
  { id: 2, code: "Hart Hagerty", name: "Desktop Support Technician" },
  { id: 3, code: "Brice Swyre", name: "Tax Accountant" },
  { id: 4, code: "Marjy Ferencz", name: "Office Assistant I" },
  { id: 5, code: "Yancy Tear", name: "Community Outreach Specialist" },
  { id: 6, code: "Irma Vasilik", name: "Editor" },
  { id: 7, code: "Meghann Durtnal", name: "Staff Accountant IV" },
  { id: 8, code: "Sammy Seston", name: "Accountant I" },
  { id: 9, code: "Lesya Tinham", name: "Safety Technician IV" },
  { id: 10, code: "Zaneta Tewkesbury", name: "VP Marketing" },
  { id: 11, code: "Andy Tipple", name: "Librarian" },
];
 

const TableGroup = () => {
  return (
    <div className="w-full md:m-1 lg:m-2 h-dvh bg-base-100 overflow-auto rounded-md shadow-lg shadow-gray-200 dark:shadow-gray-900">
      <table className="table table-pin-rows table-pin-cols">
        <thead className="border-4 bg-indigo-500 bg-clip-content p-3 text-white">
          <tr className="border-4 bg-indigo-500 bg-clip-padding p-3">
            <td>الرقم</td>
            <td>كود المجموعة</td>
            <td>اسم المجموعة</td>
            <td>العمليات</td>
          </tr>
        </thead>
        <tbody>
          {groupData.map((group) => (
            <tr key={group.id}>
              <th>{group.id}</th>
              <td>{group.code}</td>
              <td>{group.name}</td>
             <td>{group.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGroup;
