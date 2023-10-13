import React from 'react';
import Contact from './ContactUs';

export default function DevelopmentInProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-center font-bold text-2xl mb-6">
          COMING SOON ...
        </h2>
        <Contact />
      </div>
    </div>
  );
}
