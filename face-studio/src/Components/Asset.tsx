import React from "react";
import Image from 'next/image';  

const Asset = ({ imageSrc }) => {  
  return (
    <div className="bg-slate-300 p-3 rounded-lg">
      <div className="w-[150px] h-[150px] relative">  
        <Image
          src={imageSrc}  
          alt="Asset Image"
          fill  // This ensures the image fills the container
          className="object-cover rounded-lg"  // Ensure aspect ratio is maintained and image is cropped if necessary
        />
      </div>
    </div>
  );
};

export default Asset;
