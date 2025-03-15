//frontend/src/components/home/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
	return (
		<div className='py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
			<div className='container mx-auto px-4 text-center'>
				<h2 className='text-3xl md:text-4xl font-bold mb-6'>
					Comienza a ahorrar hoy mismo
				</h2>
				<p className='text-xl mb-8 max-w-2xl mx-auto'>
					Más de 2,500 empresas ya optimizan sus envíos con ShipAlly. Únete a
					ellas y transforma tu logística internacional.
				</p>
				<div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10'>
					<Link
						to='/register'
						className='px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition text-lg font-semibold'>
						Registrarse gratis
					</Link>
					<Link
						to='/calculator'
						className='px-8 py-3 border border-white text-white rounded-md hover:bg-blue-700 transition text-lg font-semibold'>
						Calcular ahorro
					</Link>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
					<div className='bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm'>
						<div className='text-4xl font-bold mb-2'>60%</div>
						<p>Ahorro promedio en costes de transporte</p>
					</div>
					<div className='bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm'>
						<div className='text-4xl font-bold mb-2'>14 días</div>
						<p>Tiempo medio para encontrar un match perfecto</p>
					</div>
					<div className='bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm'>
						<div className='text-4xl font-bold mb-2'>5 min</div>
						<p>Es todo lo que necesitas para empezar a ahorrar</p>
					</div>
				</div>

				<div className='mt-12 bg-white bg-opacity-10 p-6 rounded-lg max-w-3xl mx-auto'>
					<p className='text-lg'>
						Únete a la revolución del transporte compartido y contribuye a un
						comercio internacional más sostenible y eficiente.
					</p>
					<div className='flex items-center justify-center mt-4'>
						<svg
							className='w-5 h-5 text-green-300 mr-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M5 13l4 4L19 7'
							/>
						</svg>
						<span>Sin costes fijos ni compromiso de permanencia</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
