//frontend/src/components/home/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className='relative bg-gradient-to-r from-blue-600 to-green-500 text-white overflow-hidden'>
			{/* Background pattern */}
			<div className='absolute inset-0 z-0 opacity-10'>
				<svg
					className='h-full w-full'
					fill='none'>
					<defs>
						<pattern
							id='shipping-pattern'
							patternUnits='userSpaceOnUse'
							width='100'
							height='100'
							patternTransform='scale(2) rotate(0)'>
							<path
								d='M11 18l5-5-5-5M4 6h16M4 12h13M4 18h7'
								stroke='white'
								strokeWidth='2'
							/>
						</pattern>
					</defs>
					<rect
						width='100%'
						height='100%'
						fill='url(#shipping-pattern)'
					/>
				</svg>
			</div>

			<div className='container mx-auto px-4 py-20 md:py-32 relative z-10'>
				<div className='flex flex-col md:flex-row items-center'>
					<div className='md:w-1/2 mb-10 md:mb-0'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
							Reduce tus costes de transporte compartiendo contenedores
						</h1>
						<p className='text-xl md:text-2xl mb-8 text-blue-100'>
							Conectamos empresas para compartir espacio en contenedores
							internacionales, ahorrando hasta un 60% en costes de envío y
							reduciendo tu huella de carbono.
						</p>
						<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
							<Link
								to='/register'
								className='px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition text-lg font-semibold text-center'>
								Empieza gratis
							</Link>
							<Link
								to='/calculator'
								className='px-8 py-3 border border-white text-white rounded-md hover:bg-blue-700 transition text-lg font-semibold text-center'>
								Calcular ahorro
							</Link>
						</div>
					</div>
					<div className='md:w-1/2'>
						<div className='relative'>
							<div className='bg-white rounded-lg shadow-2xl p-6 transform rotate-1'>
								<div className='bg-blue-50 p-4 rounded-md mb-4'>
									<div className='flex justify-between items-center'>
										<div className='font-bold text-blue-800'>
											Ruta: Shanghai → Barcelona
										</div>
										<div className='text-green-600 font-medium'>
											Ahorro: 58%
										</div>
									</div>
								</div>
								<div className='space-y-4'>
									<div className='flex items-center justify-between p-3 border border-gray-200 rounded-md'>
										<div className='flex items-center'>
											<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-3'>
												<svg
													className='w-6 h-6'
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
											</div>
											<div>
												<div className='font-medium text-gray-800'>
													Electrónica S.L.
												</div>
												<div className='text-sm text-gray-500'>
													50% del contenedor
												</div>
											</div>
										</div>
										<div className='text-green-600 font-medium'>2.300€</div>
									</div>
									<div className='flex items-center justify-between p-3 border border-gray-200 rounded-md'>
										<div className='flex items-center'>
											<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-3'>
												<svg
													className='w-6 h-6'
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
											</div>
											<div>
												<div className='font-medium text-gray-800'>
													MueblesDeco
												</div>
												<div className='text-sm text-gray-500'>
													30% del contenedor
												</div>
											</div>
										</div>
										<div className='text-green-600 font-medium'>1.380€</div>
									</div>
									<div className='flex items-center justify-between p-3 border border-gray-200 rounded-md'>
										<div className='flex items-center'>
											<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-3'>
												<svg
													className='w-6 h-6'
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
											</div>
											<div>
												<div className='font-medium text-gray-800'>
													TuEmpresa
												</div>
												<div className='text-sm text-gray-500'>
													20% del contenedor
												</div>
											</div>
										</div>
										<div className='text-green-600 font-medium'>920€</div>
									</div>
									<div className='mt-4 p-3 bg-gray-50 rounded-md'>
										<div className='flex justify-between items-center text-lg font-bold'>
											<div>Precio total del contenedor:</div>
											<div className='text-gray-800'>4.600€</div>
										</div>
										<div className='text-sm text-gray-500 mt-1'>
											Precio tradicional: 11.000€
										</div>
									</div>
								</div>
							</div>
							<div className='absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg transform rotate-6'>
								<div className='text-sm'>Reducción de CO₂</div>
								<div className='text-2xl font-bold'>-63%</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-20 text-center'>
					<p className='text-blue-100 mb-6'>Confían en nosotros:</p>
					<div className='flex flex-wrap justify-center gap-8 opacity-70'>
						<div className='bg-white bg-opacity-20 p-3 rounded'>DHL</div>
						<div className='bg-white bg-opacity-20 p-3 rounded'>Maersk</div>
						<div className='bg-white bg-opacity-20 p-3 rounded'>MSC</div>
						<div className='bg-white bg-opacity-20 p-3 rounded'>CMA CGM</div>
						<div className='bg-white bg-opacity-20 p-3 rounded'>
							Hapag-Lloyd
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
