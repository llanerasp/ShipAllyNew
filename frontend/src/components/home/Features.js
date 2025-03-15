//frontend/src/components/home/Features.js
import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
	<div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition'>
		<div className='text-blue-600 text-3xl mb-4'>{icon}</div>
		<h3 className='text-xl font-bold mb-2'>{title}</h3>
		<p className='text-gray-600'>{description}</p>
	</div>
);

const Features = () => {
	const features = [
		{
			icon: '🌐',
			title: 'Rutas globales',
			description:
				'Conectamos empresas en más de 120 puertos internacionales, cubriendo las principales rutas comerciales del mundo.',
		},
		{
			icon: '⚡',
			title: 'Matching inteligente',
			description:
				'Nuestro algoritmo encuentra las combinaciones óptimas de empresas para compartir contenedores maximizando el ahorro.',
		},
		{
			icon: '📊',
			title: 'Análisis detallado',
			description:
				'Visualiza informes completos sobre tus ahorros económicos y la reducción de tu huella de carbono.',
		},
		{
			icon: '📱',
			title: 'App multiplataforma',
			description:
				'Gestiona tus envíos desde cualquier dispositivo con nuestra plataforma web y aplicaciones móviles.',
		},
		{
			icon: '🔎',
			title: 'Trazabilidad completa',
			description:
				'Seguimiento en tiempo real de tus envíos con notificaciones automáticas en cada etapa del proceso.',
		},
		{
			icon: '📄',
			title: 'Gestión documental',
			description:
				'Simplificamos la documentación aduanera y de transporte, centralizando todos los requisitos legales.',
		},
	];

	return (
		<div className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Características que marcan la diferencia
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							{...feature}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Features;
