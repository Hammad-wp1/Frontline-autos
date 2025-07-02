import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [uploadedCar, setUploadedCar] = useState(null);

  const carsForSale = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2019,
      price: 'R85,000',
      image: 'https://placehold.co/600x400?text=Toyota+Corolla',
      description: 'Well-maintained city commuter with low mileage.',
    },
    {
      id: 2,
      make: 'Ford',
      model: 'Focus',
      year: 2020,
      price: 'R92,000',
      image: ' https://placehold.co/600x400?text=Ford+Focus',
      description: 'Fuel-efficient hatchback with smart tech features.',
    },
    {
      id: 3,
      make: 'Volkswagen',
      model: 'Polo',
      year: 2018,
      price: 'R78,000',
      image: ' https://placehold.co/600x400?text=VW+Polo',
      description: 'Classic family hatchback with excellent reliability.',
    },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedCar({
          image: e.target.result,
          name: file.name,
          size: `${(file.size / 1024).toFixed(2)} KB`,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Frontline Autos</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><button onClick={() => setActiveTab('home')} className={`font-medium ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>Home</button></li>
              <li><button onClick={() => setActiveTab('browse')} className={`font-medium ${activeTab === 'browse' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>Browse Cars</button></li>
              <li><button onClick={() => setActiveTab('sell')} className={`font-medium ${activeTab === 'sell' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>Sell/Trade</button></li>
              <li><button onClick={() => setActiveTab('premium')} className={`font-medium ${activeTab === 'premium' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>Premium</button></li>
              <li><button onClick={() => setActiveTab('contact')} className={`font-medium ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeTab === 'home' && (
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Welcome to Frontline Autos</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Your trusted source for quality second-hand cars. Sell your car quickly or browse our latest stock.
            </p>
            <img src=" https://placehold.co/1200x400?text=Used+Car+Dealership" alt="Banner" className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" />
          </section>
        )}

        {/* Browse Cars */}
        {activeTab === 'browse' && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Available Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carsForSale.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{car.year} {car.make} {car.model}</h3>
                    <p className="text-blue-600 font-bold mt-2">{car.price}</p>
                    <p className="mt-2 text-gray-600">{car.description}</p>
                    <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sell/Trade Section */}
        {activeTab === 'sell' && (
          <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Sell or Trade-In Your Car</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload a Photo of Your Car</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {uploadedCar && (
                <div className="mt-4 text-center">
                  <img src={uploadedCar.image} alt={uploadedCar.name} className="mx-auto h-48 object-cover rounded" />
                  <p className="mt-2 text-sm text-gray-600">File: {uploadedCar.name}, Size: {uploadedCar.size}</p>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition duration-200"
              >
                Submit for Evaluation
              </button>
            </form>
          </section>
        )}

        {/* Premium Section */}
        {activeTab === 'premium' && (
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Unlock Premium AI Inspection</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-6 text-gray-700">
                Upgrade to premium and let our AI analyze your car's condition — detect water damage, rust, previous repairs, and more through uploaded photos!
              </p>
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold text-green-600 mb-4">R100/month</p>
                <a
                  href=" https://paypal.me/YOUR_PAYPAL_ID "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  Subscribe Now
                </a>
                <p className="mt-4 text-sm text-gray-500">Pay via PayPal or bank transfer</p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Frontline Autos</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p>123 Auto Lane, Johannesburg, South Africa</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p>+27 11 123 4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p>info@frontlineautos.co.za</p>
              </div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.657639636286!2d28.05757431504665!3d-26.116409783446796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b0d5a7c0a01%3A0x3aa9d6bfa7089af4!2sSandton%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1698765432109!5m2!1sen!2sza"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a href=" https://wa.me/27111234567 " target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-200">
                Chat on WhatsApp
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Frontline Autos</h3>
              <p className="text-gray-400">Your trusted second-hand car dealership in South Africa.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">LinkedIn</a>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6">&copy; {new Date().getFullYear()} Frontline Autos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
