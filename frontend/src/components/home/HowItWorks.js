//frontend/src/components/home/HowItWorks.js
import React from 'react';

const Step = ({ number, title, description, icon }) => (
	<div className='relative'>
		<div className='flex items-center mb-4'>
			<div className='bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold mr-4'>
				{number}
			</div>
			<h3 className='text-xl font-bold'>{title}</h3>
		</div>
		<div className='pl-14'>
			<p className='text-gray-600 mb-4'>{description}</p>
			<div className='bg-blue-50 p-4 rounded-lg'>
				<div className='flex items-center'>
					<div className='text-blue-600 text-xl mr-3'>{icon}</div>
					<div className='text-sm text-blue-800'>
						<strong>Pro tip:</strong>{' '}
						{number === 1
							? 'Especifica bien las dimensiones y peso de tu carga para un emparejamiento óptimo.'
							: number === 2
							? 'Compara varias opciones antes de decidir para maximizar tu ahorro.'
							: number === 3
							? 'Utiliza nuestro sistema de seguimiento para monitorizar tu envío en tiempo real.'
							: 'Deja una reseña después de cada envío para ayudar a crecer la comunidad.'}
					</div>
				</div>
			</div>
		</div>

		{number < 4 && (
			<div className='absolute left-5 top-16 h-full border-l-2 border-dashed border-blue-200'></div>
		)}
	</div>
);

const HowItWorks = () => {
	return (
		<div className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						¿Cómo funciona ShipAlly?
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Un proceso simple y eficiente para conectar empresas y optimizar el
						transporte marítimo internacional.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					<div className='space-y-16'>
						<Step
							number={1}
							title='Publica tu necesidad de espacio'
							description='Indica el origen, destino, fecha, dimensiones y tipo de mercancía que necesitas transportar.'
							icon='📦'
						/>
						<Step
							number={3}
							title='Gestiona y rastrea tu envío'
							description='Accede a toda la documentación, sigue el estado de tu contenedor y mantente informado en cada etapa.'
							icon='🔍'
						/>
					</div>

					<div className='space-y-16 lg:mt-24'>
						<Step
							number={2}
							title='Encuentra el match perfecto'
							description='Conecta con otras empresas con rutas y fechas compatibles o únete a contenedores ya programados.'
							icon='🤝'
						/>
						<Step
							number={4}
							title='Recibe tu mercancía y ahorra'
							description='Completa el proceso con la recepción de tu envío y comprueba el ahorro económico y ambiental generado.'
							icon='💸'
						/>
					</div>
				</div>

				<div className='mt-16 bg-gray-50 p-8 rounded-lg shadow-md'>
					<h3 className='text-2xl font-bold mb-4 text-center'>
						Plataforma segura y transparente
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						<div className='flex items-start'>
							<div className='bg-blue-100 p-2 rounded-full text-blue-600 mr-3'>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
									/>
								</svg>
							</div>
							<div>
								<h4 className='font-bold mb-1'>Verificación de empresas</h4>
								<p className='text-sm text-gray-600'>
									Todas las empresas en nuestra plataforma son validadas para
									garantizar seguridad.
								</p>
							</div>
						</div>
						<div className='flex items-start'>
							<div className='bg-blue-100 p-2 rounded-full text-blue-600 mr-3'>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
									/>
								</svg>
							</div>
							<div>
								<h4 className='font-bold mb-1'>Pagos seguros</h4>
								<p className='text-sm text-gray-600'>
									Sistema de pagos protegido con liberación de fondos al
									verificar la entrega.
								</p>
							</div>
						</div>
						<div className='flex items-start'>
							<div className='bg-blue-100 p-2 rounded-full text-blue-600 mr-3'>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
									/>
								</svg>
							</div>
							<div>
								<h4 className='font-bold mb-1'>Comunicación directa</h4>
								<p className='text-sm text-gray-600'>
									Chat integrado entre empresas para coordinar detalles del
									envío.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
