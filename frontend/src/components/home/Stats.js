//frontend/src/components/home/Stats.js
import React from 'react';

const StatCard = ({ number, label, description, icon }) => (
	<div className='bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-xl hover:-translate-y-1'>
		<div className='flex items-start'>
			<div className='mr-4 bg-blue-100 p-3 rounded-full text-blue-600'>
				{icon}
			</div>
			<div>
				<div className='text-3xl md:text-4xl font-bold text-blue-600 mb-2'>
					{number}
				</div>
				<div className='text-xl font-semibold text-gray-800 mb-1'>{label}</div>
				<p className='text-gray-600'>{description}</p>
			</div>
		</div>
	</div>
);

const Stats = () => {
	return (
		<div className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Impacto real y medible
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						En ShipAlly estamos transformando el transporte marítimo
						internacional con resultados que benefician tanto a las empresas
						como al planeta.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<StatCard
						number='60%'
						label='Ahorro medio'
						description='Reducción promedio en los costes de transporte para nuestros clientes.'
						icon={
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						}
					/>
					<StatCard
						number='42%'
						label='Menos CO₂'
						description='Reducción de emisiones de carbono por optimización de espacio en contenedores.'
						icon={
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						}
					/>
					<StatCard
						number='2.500+'
						label='Empresas activas'
						description='Compañías que ya se benefician de nuestra plataforma colaborativa.'
						icon={
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
								/>
							</svg>
						}
					/>
					<StatCard
						number='8.700'
						label='Contenedores compartidos'
						description='Envíos completados con éxito a través de nuestra plataforma.'
						icon={
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l-4-4m4 4l4-4'
								/>
							</svg>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Stats;
