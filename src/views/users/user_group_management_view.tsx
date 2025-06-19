import FormContainer from "../../components/form_container.tsx";
import InputField from "../../components/inputs/input_field.tsx";
import Textarea from "../../components/inputs/textarea.tsx";
import Table from "../../components/table.tsx";

const UserGroupManagementView = () => {
    return (
        <div className='h-dvh w-full flex flex-col items-center space-y-1 justify-start p-2 m-0'>
            <section className='p-2 w-full bg-blue-500 h-auto mt-5 lg:mt-0'>
                <h1 className='text-4xl text-center font-bold mb-4'>User Group Management</h1>
                <form className="w-full h-auto flex justify-start items-center flex-col">
                    <FormContainer classes='w-5/6 h-auto p-2 space-y-4 flex flex-col'>
                        <div className='w-full flex flex-col lg:flex-row justify-evenly m-auto items-start'>
                            <InputField name='group_name' labelText='Group Name' fieldType='text'
                                        placeholder='Group Name'
                                        withLabel={true} classes='w-full mb-4 lg:mb-0 lg:w-2/5 mx-auto'/>
                            <Textarea name='group_description' placeholder='Group Description' withLabel={true}
                                      labelText='Group Description' classes='w-full lg:w-2/5 mx-auto'/>
                        </div>
                        <div>

                        </div>
                    </FormContainer>
                </form>
            </section>
            <section className='w-full h-dvh'>
                <Table/>
            </section>
        </div>
    )
}

export default UserGroupManagementView