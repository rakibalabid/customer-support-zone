import React from "react";

const ResolvedSection = ({ resolved }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-[#1E293B]">Resolved Task</h2>

      {resolved.length === 0 ? (
        <p className="text-gray-400 text-sm italic">No resolved tasks yet.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-[#E0E7FF] p-4 rounded-lg border-l-4 border-[#4F46E5]"
            >
              <p className="text-[#1E293B] font-medium text-sm">
                {ticket.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedSection;