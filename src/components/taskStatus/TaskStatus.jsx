import React from 'react';

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className='card bg-transparent p-0'>
      <h2 className='text-xl font-bold mb-4 text-[#1E293B]'>Task Status</h2>
      {tasks.length === 0 ? (
        <p className='text-gray-500 italic'>Select a ticket to add to Task Status</p>
      ) : (
        <div className='flex flex-col gap-4'>
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className='bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4 transition-all hover:shadow-md'
            >
              {/* Title & Description */}
              <div>
                <h3 className='text-[#1E293B] font-bold text-base mb-1'>{task.title}</h3>
                <p className='text-gray-500 text-xs line-clamp-2'>{task.description}</p>
              </div>

              {/* Complete Button  */}
              <button 
                className='w-full py-2.5 bg-[#00A854] hover:bg-[#008F47] text-white font-bold rounded-lg transition-colors text-sm'
                onClick={() => onComplete(task)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;