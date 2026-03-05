

import React from "react";

const TicketCard = ({ ticket, onSelect }) => {
  return (
    <div 
      className="card bg-white border border-gray-100 shadow-sm hover:shadow-md cursor-pointer transition-all"
      onClick={() => onSelect(ticket)}
    >
      <div className="p-4">
        {/* Header: Title and Status Badge */}
        <div className="flex justify-between items-start">
          <h2 className="text-sm font-bold text-gray-800 flex-1">
            {ticket.title} - <span className="font-normal text-gray-500">{ticket.description}</span>
          </h2>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
            ticket.status === "Open" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
          }`}>
            ● {ticket.status}
          </span>
        </div>

        {/* Footer: ID, Priority, Customer, Date */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-gray-400">
          <span className="font-bold">#100{ticket.id}</span>
          
          <span className={`font-bold uppercase ${
            ticket.priority === "High" ? "text-red-500" : 
            ticket.priority === "Medium" ? "text-yellow-600" : "text-green-500"
          }`}>
            {ticket.priority} PRIORITY
          </span>

          <span className="ml-auto">{ticket.customer}</span>
          
          <div className="flex items-center gap-1">
            📅 {ticket.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;