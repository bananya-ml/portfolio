import React from 'react';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="bg-image" // Add the CSS class to set the background image
      style={{
        minHeight: '100vh', // Set the min height to fit the viewport
      }}
    >
    {children}
    </div>
  );
};

export default BackgroundWrapper;
