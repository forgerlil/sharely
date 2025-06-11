import Link from 'next/link';

const SingleEntry = async ({ params }) => {
	const { id } = await params;
	const baseUrl =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000'
			: process.env.NEXT_PUBLIC_PROD_URL;
	console.log(baseUrl);
	const response = await fetch(`${baseUrl}/api/entry/${id}`);
	const entry = await response.json();

	return (
		<div className='min-h-screen max-w-6xl mx-auto p-6'>
			<div className='flex flex-row gap-8 items-start'>
				<img
					src={entry.image}
					alt={entry.title}
					className='w-1/2 rounded-lg shadow-2xl object-cover aspect-square'
				/>
				<div className='w-1/2 flex flex-col h-full'>
					<div className='flex-grow'>
						<h1 className='text-4xl font-bold mb-4'>{entry.title}</h1>
						<p className='text-lg mb-4'>{entry.description}</p>
					</div>
					<div className='mt-auto pt-8 flex flex-col gap-4'>
						<p className='text-md text-gray-400'>Posted by: {entry.username}</p>
						<Link href='/' className='btn btn-primary w-fit'>
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SingleEntry;
