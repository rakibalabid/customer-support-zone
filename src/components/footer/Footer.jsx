import React from "react";

const Footer = () => {
  return (
    <footer className="p-10 bg-[#0B0B0B] text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Column 1: Company Info */}
        <aside className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white">CS — Ticket System</h2>
          <p className="text-sm leading-relaxed">
            Your data security and providing the right solutions are our top priorities. 
            As a modern ticket management system, we have been providing reliable customer 
            support since 2026. 🛡️🚀
          </p>
        </aside>

        {/* Column 2: Company Links */}
        <nav className="flex flex-col gap-2">
          <h6 className="text-white font-bold mb-2">Company</h6>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">About Us</a>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Our Mission</a>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Contact Sales</a>
        </nav>

        {/* Column 3: Services Links */}
        <nav className="flex flex-col gap-2">
          <h6 className="text-white font-bold mb-2">Services</h6>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Products & Services</a>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Customer Stories</a>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Download Apps</a>
        </nav>

        {/* Column 4: Information Links  */}
        <nav className="flex flex-col gap-2">
          <h6 className="text-white font-bold mb-2">Information</h6>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Privacy Policy</a>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Terms & Conditions</a>
          <a className="hover:text-white transition-colors cursor-pointer text-sm">Join Us</a>
        </nav>

        {/* Column 5: Social Links */}
        <nav className="flex flex-col gap-3">
          <h6 className="text-white font-bold mb-2">Social Links</h6>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2 hover:text-white text-sm">
              <span className="bg-gray-800 w-6 h-6 flex items-center justify-center rounded-full text-[10px]">𝕏</span> @CS — Ticket System
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white text-sm">
              <span className="bg-gray-800 w-6 h-6 flex items-center justify-center rounded-full text-[10px]">in</span> @CS — Ticket System
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white text-sm">
              <span className="bg-gray-800 w-6 h-6 flex items-center justify-center rounded-full text-[10px]">f</span> @CS — Ticket System
            </a>
            <span className="mt-2 text-xs flex items-center gap-2 italic">✉ support@cst.com</span>
          </div>
        </nav>
      </div>

      {/* Footer Bottom: CopyRight Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-xs">© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;