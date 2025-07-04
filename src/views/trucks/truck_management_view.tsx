import { useTranslation } from 'react-i18next';
import   { useState } from 'react';
import SearchBar from '../../components/truckscomponent/SearchBar.tsx';
import Pagination from '../../components/pagination.tsx';
import TableManagement from '../../components/truckscomponent/table_management.tsx';

const TruckManagementView = () => {
	const { t } = useTranslation('truck-management/truck');
	 const [search, setSearch] = useState<string>('');
	document.title = t('title');
	return (
		<>
		<h1 className="text-5xl font-bold">{t('title')}</h1>
		
		<div className="flex gap-6">
							<label className="   p-l-0 text-white p-9 rounded" htmlFor="">البحث</label>

			 <div className="p-4 flex gap-6">
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClear={() => setSearch('')}
      />
    </div>
		</div>
		
			<TableManagement/>
			<Pagination />
		
		</>			
		 
	);
};

export default TruckManagementView;
