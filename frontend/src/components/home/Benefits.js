//frontend/src/components/home/Benefits.js
import React from 'react';

const BenefitCard = ({ title, description, icon, isGreen }) => (
	<div
		className={`p-6 rounded-lg shadow-md ${
			isGreen ? 'bg-green-50' : 'bg-white'
		} transition hover:shadow-lg`}>
		<div
			className={`text-4xl mb-4 ${
				isGreen ? 'text-green-600' : 'text-blue-600'
			}`}>
			{icon}
		</div>
		<h3 className='text-xl font-bold mb-3'>{title}</h3>
		<p className='text-gray-600'>{description}</p>
	</div>
);

const Benefits = () => {
	const economicBenefits = [
		{
			icon: '💰',
			title: 'Hasta 60% de ahorro en costes',
			description:
				'Divide el precio del contenedor entre varias empresas y paga solo por el espacio que necesitas.',
		},
		{
			icon: '📈',
			title: 'Acceso a nuevos mercados',
			description:
				'Llega a destinos internacionales que serían económicamente inviables con un contenedor completo.',
		},
		{
			icon: '🔄',
			title: 'Mayor frecuencia de envíos',
			description:
				'Realiza envíos más pequeños y frecuentes sin esperar a completar un contenedor.',
		},
		{
			icon: '📊',
			title: 'Optimización del cash flow',
			description:
				'Reduce la inversión en logística y libera capital para otras áreas de tu negocio.',
		},
	];

	const environmentalBenefits = [
		{
			icon: '🌱',
			title: 'Reducción de huella de carbono',
			description:
				'Cada contenedor compartido significa menos emisiones de CO₂ por unidad transportada.',
		},
		{
			icon: '🌊',
			title: 'Menor impacto marítimo',
			description:
				'Reducimos la cantidad de buques necesarios, disminuyendo la contaminación de los océanos.',
		},
		{
			icon: '♻️',
			title: 'Economía circular',
			description:
				'Optimizamos recursos existentes en lugar de consumir capacidad adicional.',
		},
		{
			icon: '🌍',
			title: 'Certificados ambientales',
			description:
				'Recibe informes de reducción de CO₂ para tus objetivos de sostenibilidad empresarial.',
		},
	];

	return (
		<div className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Beneficios que transforman tu negocio
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						ShipAlly ofrece un enfoque revolucionario en el transporte marítimo
						internacional, combinando beneficios económicos y medioambientales.
					</p>
				</div>

				<div className='mb-20'>
					<h3 className='text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-4'>
						Beneficios económicos
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{economicBenefits.map((benefit, index) => (
							<BenefitCard
								key={index}
								{...benefit}
								isGreen={false}
							/>
						))}
					</div>
				</div>

				<div>
					<h3 className='text-2xl font-bold mb-8 border-l-4 border-green-600 pl-4'>
						Beneficios medioambientales
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{environmentalBenefits.map((benefit, index) => (
							<BenefitCard
								key={index}
								{...benefit}
								isGreen={true}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
