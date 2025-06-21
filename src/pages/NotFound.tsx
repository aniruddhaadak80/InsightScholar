
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background image for 404 page */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.7), rgba(30,41,59,0.7)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')"
        }}
      />
      
      <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-scholar-blue to-scholar-purple bg-clip-text text-transparent">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">The page you're looking for seems to have wandered off into the digital void.</p>
        <a 
          href="/" 
          className="inline-block bg-gradient-to-r from-scholar-blue to-scholar-purple text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
