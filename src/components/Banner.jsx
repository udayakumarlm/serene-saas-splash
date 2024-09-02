import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">SaaSify</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/"><Button variant="ghost">Home</Button></Link></li>
            <li><Link to="/about"><Button variant="ghost">About</Button></Link></li>
            <li><Link to="/help"><Button variant="ghost">Help</Button></Link></li>
            <li><Link to="/buy-now"><Button variant="ghost">Buy Now</Button></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Banner;