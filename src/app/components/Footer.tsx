import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            Home
          </a>
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            About
          </a>
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            Delivery
          </a>
          <a className="hover:text-cyan-500 text-amber-500" href="#">
            Contact
          </a>
        </nav>

        <div className='flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105'>
          <a href='https://www.facebook.com/' target='blank' rel='nofollow noopener'>
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png"alt="facebook logo"/>
          </a>
          <a href='https://www.linkedin.com/' target='blank' rel='nofollow noopener'>
            <img src='https://img.icons8.com/fluent/30/000000/linkedin-2.png'alt='linkedin logo'/>
          </a>
          <a href="https://www.instagram.com/?hl=en"target="blank"rel="nofollow noopener">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png"alt="instagram logo"/>
          </a>
          <a href="https://twitter.com" target="blank" rel="nofollow noopener">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png"alt="twitter logo"/>
          </a>
        </div>
        <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8">2025 Shahbaz Shaikh. All Rights Reserved</p>
        <br />
        <br />
       </footer>
    </div>
  );
}
