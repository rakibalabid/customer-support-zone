
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import TicketList from './components/ticket/TicketList';
import TaskStatus from './components/taskStatus/TaskStatus';
import Footer from './components/footer/Footer';
import ResolvedSection from './components/resolvedSection/ResolvedSection';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {

  const [tickets, setTickets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [ resolved, setResolved ] =useState([]);

  //JSON 
  useEffect(()=> {
    fetch("/tickets.json").then((res) => res.json())
    .then((data) => setTickets(data));
  }, []);


  const handleSelect = (ticket) => {
    setTasks([...tasks, ticket]);
    toast.info(`Ticket added to Task Status: ${ticket.title}`);
  };

  const handleComplete = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    setResolved([...resolved, task]);
    setTickets(tickets.filter((t) => t.id !== task.id));
    toast.success(`Ticket resolved: ${task.title}`);
  };
  

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner inProgressCount={tasks.length} resolvedCount={resolved.length}></Banner>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
          {/* Tickets Section */}
          <div className='md:col-span-2'>
            <h2 className='text-2xl font-bold mb-4'>Customer Tickets</h2>
            <TicketList tickets={tickets} onSelect={handleSelect}></TicketList>
          </div>

          {/* Right side: Task Status Section + Resolved  */}
          <div className='space-y-6'>
            <TaskStatus tasks={tasks} onComplete={handleComplete}></TaskStatus>
            <ResolvedSection resolved={resolved}></ResolvedSection>
          </div>

        </div>

        <Footer></Footer>
        <ToastContainer position='top-right'></ToastContainer>
      </div>
      
      
    </>
  )
}

export default App
