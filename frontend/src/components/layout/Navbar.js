//frontend/src/components/layout/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className='bg-white shadow-md py-4 sticky top-0 z-50'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<Link
					to='/'
					className='flex items-center'>
					<Logo />
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden md:flex space-x-8'>
					<Link
						to='/'
						className='text-gray-700 hover:text-blue-600 transition'>
						Inicio
					</Link>
					<Link
						to='/how-it-works'
						className='text-gray-700 hover:text-blue-600 transition'>
						Cómo funciona
					</Link>
					<Link
						to='/benefits'
						className='text-gray-700 hover:text-blue-600 transition'>
						Beneficios
					</Link>
					<Link
						to='/pricing'
						className='text-gray-700 hover:text-blue-600 transition'>
						Precios
					</Link>
					<Link
						to='/contact'
						className='text-gray-700 hover:text-blue-600 transition'>
						Contacto
					</Link>
				</div>

				{/* Login/Register Buttons */}
				<div className='hidden md:flex items-center space-x-4'>
					<Link
						to='/login'
						className='px-4 py-2 text-blue-600 hover:text-blue-800 transition'>
						Iniciar sesión
					</Link>
					<Link
						to='/register'
						className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
						Registrarse
					</Link>
				</div>

				{/* Mobile menu button */}
				<div className='md:hidden'>
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className='text-gray-700 hover:text-blue-600 focus:outline-none'>
						{mobileMenuOpen ? (
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className='md:hidden bg-white py-4 px-4'>
					<div className='flex flex-col space-y-4'>
						<Link
							to='/'
							className='text-gray-700 hover:text-blue-600 transition'>
							Inicio
						</Link>
						<Link
							to='/how-it-works'
							className='text-gray-700 hover:text-blue-600 transition'>
							Cómo funciona
						</Link>
						<Link
							to='/benefits'
							className='text-gray-700 hover:text-blue-600 transition'>
							Beneficios
						</Link>
						<Link
							to='/pricing'
							className='text-gray-700 hover:text-blue-600 transition'>
							Precios
						</Link>
						<Link
							to='/contact'
							className='text-gray-700 hover:text-blue-600 transition'>
							Contacto
						</Link>
						<div className='flex flex-col space-y-2 pt-4 border-t border-gray-200'>
							<Link
								to='/login'
								className='px-4 py-2 text-blue-600 hover:text-blue-800 transition'>
								Iniciar sesión
							</Link>
							<Link
								to='/register'
								className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-center'>
								Registrarse
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
