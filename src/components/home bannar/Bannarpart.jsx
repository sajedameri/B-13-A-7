import React from 'react';

const Bannarpart = () => {
  return (
    <div className='py-10 px-4'>

      {/* Grid Container */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto'>

        {/* Card 1 */}
        <div className='bg-white shadow-md rounded-xl p-5 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold'>10</h2>
          <p className='text-sm md:text-base'>Total Friend</p>
        </div>

        {/* Card 2 */}
        <div className='bg-white shadow-md rounded-xl p-5 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold'>3</h2>
          <p className='text-sm md:text-base'>On Track</p>
        </div>

        {/* Card 3 */}
        <div className='bg-white shadow-md rounded-xl p-5 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold'>6</h2>
          <p className='text-sm md:text-base'>Need Attention</p>
        </div>

        {/* Card 4 */}
        <div className='bg-white shadow-md rounded-xl p-5 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold'>12</h2>
          <p className='text-sm md:text-base'>Interactions This Month</p>
        </div>

      </div>

    </div>
  );
};

export default Bannarpart;