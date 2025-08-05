// import SearchForm from "../../components/forms/search_form.tsx";
// import Pagination from "../../components/pagination.tsx";
// import { useTranslation } from "react-i18next";
// import TableGroup from "../../components/truckscomponent/table_group.tsx";
// import AddButton from "../../components/buttons/crud_buttons/add_button.tsx";
import GroupManagementView from "../group_management_view.tsx";

const TruckGroupManagementView = () => {
  // const { t } = useTranslation("truck-management/group");
  // const translateFilePath: string = "container-management/group";

  // document.title = t("title");
  // return (
  //   <>
  //     <h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-4 lg:mb-2">
  //       {t("title")}
  //     </h1>
  //     <br />
  //     <div className="flex">
  //       <div className="w-33 flex-none ...">
  //         {" "}
  //         <AddButton
  //           classes="btn-primary btn-wide btn-wide order-1"
  //           text={t(" اضافة مجموعة")}
  //           clickEvent={() => {}}
  //         />
  //       </div>
  //       <div className=" w-255 flex-1 ...">
  //         {" "}
  //         <SearchForm translateFile={translateFilePath}>
  //           <option selected>{t("filter-name")}</option>
  //           <option>{t("filter-code")}</option>
  //         </SearchForm>
  //       </div>
  //     </div>

  //     <TableGroup />
  //     <Pagination />
  //   </>
  // );

  return <GroupManagementView classifyID={0} />;
};

export default TruckGroupManagementView;
