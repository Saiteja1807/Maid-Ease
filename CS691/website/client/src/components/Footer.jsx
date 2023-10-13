import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-[#672ab2]">
      <div className="container mx-auto text-center py-3">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
