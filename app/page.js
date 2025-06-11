'use client';

import { useState, useEffect } from 'react';
import ItemCard from '@/components/ItemCard';

export default function Home() {
	const [entries, setEntries] = useState([]);

	useEffect(() => {
		fetch('api/entry')
			.then((res) => res.json())
			.then((data) => setEntries(data));
	}, []);

	return (
		<>
			<div className='flex flex-wrap gap-4 justify-center my-12'>
				{entries.map((entry) => (
					<ItemCard key={entry._id} entry={entry} />
				))}
			</div>
		</>
	);
}
