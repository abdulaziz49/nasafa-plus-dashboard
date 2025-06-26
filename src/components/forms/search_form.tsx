import InputField from "../inputs/input_field.tsx";


const SearchForm = () => {
    return (<div className="join w-full ">
        <div>
            <div>
                {/*<input className="input join-item" placeholder="Search"/>*/}
                <InputField
                    name="search_input"
                    // labelText={t('search-label')}
                    fieldType="text"
                    // placeholder={t('search-placeholder')}
                    withLabel={false}
                    classes="w-full px-2 join-item"
                />
            </div>
        </div>
        <select className="select join-item ">
            <option disabled selected>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
        </select>
        <div className="indicator">
            <button className="btn join-item">Search</button>
        </div>
    </div>)
}

export default SearchForm;