
import React from 'react';
import Vector1 from '../../assets/vector1.png'; 
import Vector2 from '../../assets/vector2.png';

const Banner = ({ inProgressCount, resolvedCount }) => {
        
      const patternStyle = (imgLeft, imgRight) => ({
  backgroundImage: `url(${imgLeft}), url(${imgRight})`,
  backgroundSize: '250px auto, 250px auto', 
  backgroundPosition: 'left bottom, right top', 
  backgroundRepeat: 'no-repeat',
  mixBlendMode: 'plus-lighter', 
  opacity: '0.4', 
});


  return (
    <div className='py-8 px-4'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto'>
        
        {/* In Progress Box */}
        <div className='relative overflow-hidden card w-full md:w-1/2 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white shadow-xl min-h-[250px] border-none'>
          {/* ist layer */}
          <div className="absolute inset-0  pointer-events-none" style={patternStyle(Vector1, Vector2)}></div>
          
          <div className='card-body items-center justify-center text-center relative z-10'>
            <h2 className='card-title text-xl opacity-80 uppercase tracking-widest font-semibold'>In-Progress</h2>
            <p className='text-7xl font-extrabold mt-2'>{inProgressCount}</p>
          </div>
        </div>

        {/* Resolved Box */}
        <div className='relative overflow-hidden card w-full md:w-1/2 bg-gradient-to-r from-[#10B981] to-[#3B82F6] text-white shadow-xl min-h-[250px] border-none'>
          {/* 2nd layer */}
          <div className="absolute inset-0  pointer-events-none" style={patternStyle(Vector1, Vector2)}></div>

          <div className='card-body items-center justify-center text-center relative z-10'>
            <h2 className='card-title text-xl opacity-80 uppercase tracking-widest font-semibold'>Resolved</h2>
            <p className='text-7xl font-extrabold mt-2'>{resolvedCount}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;