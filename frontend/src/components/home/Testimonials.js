//frontend/src/components/home/Testimonials.js
import React, { useState } from 'react';

const TestimonialCard = ({
	content,
	author,
	position,
	company,
	image,
	logo,
}) => (
	<div className='bg-white p-6 rounded-lg shadow-md'>
		<div className='flex items-center mb-4'>
			<div className='flex-shrink-0'>
				<div className='w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white overflow-hidden'>
					{image ? (
						<img
							src={image}
							alt={author}
							className='w-full h-full object-cover'
						/>
					) : (
						author.charAt(0)
					)}
				</div>
			</div>
			<div className='ml-4'>
				<div className='font-bold text-lg'>{author}</div>
				<div className='text-gray-600 text-sm'>{position}</div>
				<div className='text-blue-600 text-sm'>{company}</div>
			</div>
			{logo && (
				<div className='ml-auto'>
					<div className='w-16 h-8 opacity-70'>{logo}</div>
				</div>
			)}
		</div>
		<p className='text-gray-700 italic'>"{content}"</p>
		<div className='mt-4 text-yellow-400 flex'>
			<svg
				className='w-5 h-5'
				fill='currentColor'
				viewBox='0 0 20 20'>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
			</svg>
			<svg
				className='w-5 h-5'
				fill='currentColor'
				viewBox='0 0 20 20'>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
			</svg>
			<svg
				className='w-5 h-5'
				fill='currentColor'
				viewBox='0 0 20 20'>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
			</svg>
			<svg
				className='w-5 h-5'
				fill='currentColor'
				viewBox='0 0 20 20'>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
			</svg>
			<svg
				className='w-5 h-5'
				fill='currentColor'
				viewBox='0 0 20 20'>
				<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
			</svg>
		</div>
	</div>
);

const Testimonials = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const testimonials = [
		{
			content:
				'Desde que empezamos a usar ShipAlly, hemos reducido nuestros costes de transporte en un 52%. Además, el proceso es increíblemente sencillo y la plataforma muy intuitiva. Un gran descubrimiento para nuestra expansión internacional.',
			author: 'Carlos Ramírez',
			position: 'Director de Logística',
			company: 'TechImport SL',
		},
		{
			content:
				'Como PYME, nunca habíamos considerado la importación directa desde Asia por los altos costes logísticos. ShipAlly nos ha permitido acceder a nuevos proveedores y mercados que antes eran inaccesibles para nosotros.',
			author: 'María Fernández',
			position: 'CEO',
			company: 'Decoraciones Modernas',
		},
		{
			content:
				'No solo hemos logrado un ahorro significativo, sino que también hemos reducido nuestra huella de carbono en un 47%. Esto ha sido fundamental para alcanzar nuestros objetivos de sostenibilidad corporativa. ¡Recomendamos ShipAlly a todas las empresas comprometidas con el medio ambiente!',
			author: 'Javier López',
			position: 'Sustainability Manager',
			company: 'EcoFurniture',
		},
	];

	const nextSlide = () => {
		setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	return (
		<div className='py-16 bg-blue-50'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Lo que dicen nuestros usuarios
				</h2>

				<div className='relative'>
					<div className='grid md:grid-cols-3 gap-8'>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className={`transition-opacity duration-300 ${
									index === activeSlide
										? 'opacity-100'
										: 'hidden md:block opacity-60'
								}`}>
								<TestimonialCard {...testimonial} />
							</div>
						))}
					</div>

					<div className='mt-8 flex justify-center md:hidden'>
						<button
							onClick={prevSlide}
							className='mx-2 p-2 rounded-full bg-blue-600 text-white'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>

						<div className='flex space-x-2 items-center'>
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveSlide(index)}
									className={`h-3 w-3 rounded-full ${
										index === activeSlide ? 'bg-blue-600' : 'bg-gray-300'
									}`}
								/>
							))}
						</div>

						<button
							onClick={nextSlide}
							className='mx-2 p-2 rounded-full bg-blue-600 text-white'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
