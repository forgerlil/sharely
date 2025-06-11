import Link from 'next/link';

const ItemCard = ({ entry }) => {
	return (
		<Link
			href={`/entry/${entry._id}`}
			className='card bg-base-300 w-96 aspect-square shadow-sm'
		>
			<figure className='h-2/3'>
				<img
					src={entry.image}
					alt={entry.title}
					className='w-full h-full object-cover'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{entry.title}</h2>
				<p className='truncate'>{entry.description}</p>
				<div className='card-actions justify-end mt-2'>
					<div className='badge badge-outline'>{entry.username}</div>
				</div>
			</div>
		</Link>
	);
};

export default ItemCard;
