import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../context/Context';

const Stats = () => {
   const {timelineData} = useContext(TimelineContext);
   console.log(timelineData)
   const calldata=timelineData.filter(item=>item.type=="Voice Call")|| []
const textdata=timelineData.filter(item=>item.type=="Text message")|| []
const videoCalldata=timelineData.filter(item=>item.type=="video call")|| []
   console.log(calldata)
   
  const data = [
  { name: 'call', value:calldata.length,fill: '#0088FE' },
  { name: 'Text', value:textdata.length, fill: '#00C49F' },
  { name: 'video call', value: videoCalldata.length, fill: '#FFBB28' },
 
];
  return (
    <div className='my-10 shadow p-10 rounded-md border border-slate-300'>
      <h2 className='text-3xl my-5 text-center font-bold'>Call, Text and Video Call List</h2>
       <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh',margin:'auto ',aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
    </div>
  );
};

export default Stats;