import Link from 'next/link';

const NavBar = () => {
	return (
		<div className='navbar bg-base-300 shadow-sm'>
			<div className='flex-1'>
				<Link href='/' className='btn btn-ghost text-xl'>
					Sharely
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1 text-lg'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/addEntry'>Add new entry</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
