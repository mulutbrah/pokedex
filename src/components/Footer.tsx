import React from 'react';

const MyFooter: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-gray-700 p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Muhammad Lutfi Ibrahim. All rights reserved.</p>
    </footer>
  );
};

export default MyFooter;