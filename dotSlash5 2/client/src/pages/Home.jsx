
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to our Social Help Website</h1>
        <p className="text-lg text-white mb-8">
          Track your complaints with ease and transparency. Our platform simplifies the process of submitting and
          monitoring complaints. With just a click, you can keep tabs on the progress of your concerns.
        </p>
        <p className="text-lg text-white mb-8">
          Your voice matters! Whether you choose anonymity or opt to share your contact information, we ensure your
          case is handled promptly and with care. Cases are managed efficiently, with severe matters swiftly elevated
          to the courts. Justice is our priority.
        </p>
        <p className="text-lg text-white mb-12">Join us in making a difference. Your community awaits your voice.</p>

        <div className="flex justify-center space-x-6">
        
          <Link
            to={"/log"}
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-purple-50 transition-colors duration-300"
          >
            Official Login
          </Link>
          <Link
            to={"/complain"}
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-purple-50 transition-colors duration-300"
          >
            Report a Crime
          </Link>
          
          <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-green-50 transition-colors duration-300">
            Track Your Complaint
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;