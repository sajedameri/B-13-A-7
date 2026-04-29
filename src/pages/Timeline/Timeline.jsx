import React, { useContext } from 'react';
import { TimelineContext } from '../../context/Context';


const Timeline = () => {
  
  const { timelineData } = useContext(TimelineContext);
  console.log(timelineData)
 
  return (
    <div className='p-6 min-h-screen'>
      <h1 className='text-2xl font-bold my-6 '> Timeline</h1>
     
  <select defaultValue="Pick a color" className="select">
  <option disabled={true}>Filter item</option>
  <option>Call</option>
  <option>Text</option>
  <option>video Call</option>
</select>

{
 timelineData.map(data=>
<div  className='text-xl font-semibold border rounded-2xl my-2 p-5 bg-gray-300 '>
  <div>
    
  </div>
<div className='flex'>
  
  <h2>{`${data.type} With ${data.name} `}</h2>
   
</div>
  <h2>{data.date}</h2>
</div>
 ) 
}

    </div>
  );
};

export default Timeline;