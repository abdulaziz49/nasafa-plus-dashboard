 

 
import   { useState } from 'react';
import SearchBar from '../../components/truckscomponent/SearchBar.tsx';
import Pagination from '../../components/pagination.tsx';
import { useTranslation } from 'react-i18next';
import TableGroup from '../../components/truckscomponent/table_group.tsx';

const TruckGroupManagementView = () => {
	const { t } = useTranslation('truck-management/group');
	 const [search, setSearch] = useState<string>('');

	document.title = t('title');
	return (
		<>
		
			<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-4 lg:mb-2">
						{t('title')}
					</h1>
	 <div className="p-4">
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClear={() => setSearch('')}
      />
    </div>
			 
			<TableGroup />
			<Pagination />
		</>
	);
};

export default TruckGroupManagementView;
