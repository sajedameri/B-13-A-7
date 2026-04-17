import React, { use } from 'react';

const friendsPromise = fetch("/data.json").then(res=>res.json())

const AllFriend = () => {
  const friends= use(friendsPromise)
  console.log(friends,"friend")
  return (
    <div>
      <h2 className='text-3xl font-bold p-8'>Your Friends </h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10'>
      {
      friends.map((friend)=>{
        return(
         <div className="card bg-base-100  shadow-sm">
  <figure>
    <img className='w-40 h-40 rounded-full'
      src={friend.picture}
      alt="Shoes" />
  </figure>
  <div className="card-body justify-center">
    <h2 className="card-title text-center">
    {friend.name}
      
    </h2>
    <p className='font-bold'>{friend.days_since_contact}Day Ago</p>
 
     {
      friend.tags.map((tag)=>(
        <div className="badge badge-accent items-center">{tag}</div>
      )

      )
    }

    <div className="card-actions justify-center flex-col-reverse">
      <div className="badge badge-outline">{friend.status}</div>
      
    </div>
  </div>
</div>

        )
      }

      )
     }
     </div>
 
      
    </div>
  );
};

export default AllFriend;