'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddEntry = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		username: '',
		image: '',
	});
	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('/api/entry', {
			method: 'POST',
			body: JSON.stringify(formData),
		});
		if (!response.ok) alert('Failed to add entry');

		const data = await response.json();
		alert(data.message);

		router.push('/');
	};

	return (
		<div className='max-w-2xl mx-auto p-6'>
			<h1 className='text-2xl font-bold mb-6'>Add New Entry</h1>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor='title' className='block text-sm font-medium mb-1'>
						Title
					</label>
					<input
						type='text'
						id='title'
						name='title'
						value={formData.title}
						onChange={handleChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>

				<div>
					<label
						htmlFor='description'
						className='block text-sm font-medium mb-1'
					>
						Description
					</label>
					<textarea
						id='description'
						name='description'
						value={formData.description}
						onChange={handleChange}
						rows='4'
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>

				<div>
					<label htmlFor='username' className='block text-sm font-medium mb-1'>
						Username
					</label>
					<input
						type='text'
						id='username'
						name='username'
						value={formData.username}
						onChange={handleChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>

				<div>
					<label htmlFor='image' className='block text-sm font-medium mb-1'>
						Image URL
					</label>
					<input
						type='text'
						id='image'
						name='image'
						value={formData.image}
						onChange={handleChange}
						className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						required
					/>
				</div>

				<button
					type='submit'
					className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddEntry;
