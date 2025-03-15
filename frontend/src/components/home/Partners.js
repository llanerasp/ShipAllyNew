//frontend/src/components/home/Partners.js
import React from 'react';

const Partners = () => {
	return (
		<div className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Nuestros partners logísticos
				</h2>

				<div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
					{/* Estos divs representarían logos de empresas. En un proyecto real, usarías <img> con los logos reales */}
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						MAERSK
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						MSC
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						CMA CGM
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						COSCO
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						HAPAG-LLOYD
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						DHL
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						KUEHNE+NAGEL
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						DB SCHENKER
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						EVERGREEN
					</div>
					<div className='h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-bold'>
						ONE
					</div>
				</div>

				<div className='mt-16 bg-gray-50 p-8 rounded-lg text-center'>
					<h3 className='text-xl font-bold mb-4'>
						¿Eres un operador logístico?
					</h3>
					<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
						Únete a nuestra red de partners y ofrece soluciones optimizadas a
						tus clientes. Potencia tu negocio mientras contribuyes a un
						transporte más sostenible.
					</p>
					<a
						href='/partners/join'
						className='inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
						Hazte partner
					</a>
				</div>
			</div>
		</div>
	);
};

export default Partners;
