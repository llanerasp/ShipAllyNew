//frontend/src/components/home/EnvironmentalImpact.js
import React from 'react';

const EnvironmentalImpact = () => {
	return (
		<div className='py-16 bg-gradient-to-r from-green-500 to-green-700 text-white'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col lg:flex-row items-center'>
					<div className='lg:w-1/2 mb-10 lg:mb-0 lg:pr-10'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Reduciendo nuestra huella en el planeta
						</h2>
						<p className='text-xl mb-6'>
							Cada año, miles de contenedores viajan medio vacíos por los
							océanos, desperdiciando recursos y generando emisiones
							innecesarias.
						</p>

						<div className='bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm mb-6'>
							<div className='flex items-center mb-4'>
								<div className='text-3xl mr-4'>🚢</div>
								<div>
									<h3 className='font-bold text-xl'>Impacto actual</h3>
									<p>
										El transporte marítimo genera más de 940 millones de
										toneladas de CO₂ anualmente
									</p>
								</div>
							</div>
							<div className='h-2 w-full bg-white bg-opacity-30 rounded-full mb-1'>
								<div
									className='h-2 bg-red-500 rounded-full'
									style={{ width: '75%' }}></div>
							</div>
							<div className='text-right'>75% de capacidad desperdiciada</div>
						</div>

						<div className='bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm'>
							<div className='flex items-center mb-4'>
								<div className='text-3xl mr-4'>🌱</div>
								<div>
									<h3 className='font-bold text-xl'>Con ShipAlly</h3>
									<p>
										Optimizamos cada contenedor, reduciendo emisiones y
										maximizando recursos
									</p>
								</div>
							</div>
							<div className='h-2 w-full bg-white bg-opacity-30 rounded-full mb-1'>
								<div
									className='h-2 bg-green-300 rounded-full'
									style={{ width: '92%' }}></div>
							</div>
							<div className='text-right'>92% de eficiencia lograda</div>
						</div>
					</div>

					<div className='lg:w-1/2'>
						<div className='bg-white p-8 rounded-lg text-gray-800 shadow-xl'>
							<h3 className='text-2xl font-bold text-green-700 mb-6'>
								Nuestro impacto en números
							</h3>

							<div className='space-y-6'>
								<div>
									<div className='flex justify-between items-center mb-2'>
										<span className='font-medium'>
											Reducción de emisiones de CO₂
										</span>
										<span className='font-bold text-green-600'>42%</span>
									</div>
									<div className='h-3 w-full bg-gray-200 rounded-full'>
										<div
											className='h-3 bg-green-500 rounded-full'
											style={{ width: '42%' }}></div>
									</div>
								</div>

								<div>
									<div className='flex justify-between items-center mb-2'>
										<span className='font-medium'>
											Contenedores optimizados
										</span>
										<span className='font-bold text-green-600'>8,700+</span>
									</div>
									<div className='h-3 w-full bg-gray-200 rounded-full'>
										<div
											className='h-3 bg-green-500 rounded-full'
											style={{ width: '87%' }}></div>
									</div>
								</div>

								<div>
									<div className='flex justify-between items-center mb-2'>
										<span className='font-medium'>
											Combustible ahorrado (toneladas)
										</span>
										<span className='font-bold text-green-600'>18,450</span>
									</div>
									<div className='h-3 w-full bg-gray-200 rounded-full'>
										<div
											className='h-3 bg-green-500 rounded-full'
											style={{ width: '65%' }}></div>
									</div>
								</div>

								<div>
									<div className='flex justify-between items-center mb-2'>
										<span className='font-medium'>
											Viajes marítimos optimizados
										</span>
										<span className='font-bold text-green-600'>1,240</span>
									</div>
									<div className='h-3 w-full bg-gray-200 rounded-full'>
										<div
											className='h-3 bg-green-500 rounded-full'
											style={{ width: '55%' }}></div>
									</div>
								</div>
							</div>

							<div className='mt-8 p-4 bg-green-50 rounded-lg border border-green-200'>
								<div className='flex items-start'>
									<div className='text-2xl text-green-600 mr-3'>💡</div>
									<p className='text-sm text-green-800'>
										<strong>¿Sabías que?</strong> Si todas las empresas
										optimizaran sus envíos como con ShipAlly, podríamos reducir
										hasta un 30% las emisiones totales del transporte marítimo
										global.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnvironmentalImpact;
