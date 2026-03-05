import React from "react";
import TicketCard from "./TicketCard";

const TicketList = ({ tickets, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default TicketList;