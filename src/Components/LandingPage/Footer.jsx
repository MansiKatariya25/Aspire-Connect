import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FF8C42] text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Aspire Connect. All Rights Reserved.</p>
        <ul className="flex justify-center mt-3 space-x-4">
          <li>
            <a href="#" className="text-white transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white transition">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
