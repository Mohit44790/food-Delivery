const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-700 px-8 py-10 mt-10">
        {/* Top Row */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Logo and Locale */}
          <div>
        <h1 className="font-bold text-2xl">MK Resturants</h1>
            <div className="flex flex-col gap-2">
              <p className="text-sm">🌐 India</p>
              <p className="text-sm">🌍 English</p>
            </div>
          </div>
  
          {/* About Zomato */}
          <div>
            <h4 className="font-semibold mb-2">About MK Resturants</h4>
            <ul className="text-sm space-y-1">
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>
  
          {/* Zomaverse */}
          <div>
            <h4 className="font-semibold mb-2">Zomaverse</h4>
            <ul className="text-sm space-y-1">
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>
  
          {/* For Restaurants */}
          <div>
            <h4 className="font-semibold mb-2">For Restaurants</h4>
            <ul className="text-sm space-y-1">
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
  
            <h4 className="font-semibold mt-4 mb-2">Learn More</h4>
            <ul className="text-sm space-y-1">
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
  
        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <img src="/path-to-fb-icon.png" alt="Facebook" className="w-6 h-6" />
          <img src="/path-to-instagram-icon.png" alt="Instagram" className="w-6 h-6" />
          <img src="/path-to-twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          <img src="/path-to-youtube-icon.png" alt="YouTube" className="w-6 h-6" />
        </div>
  
        {/* Disclaimer */}
        <p className="text-xs text-center mt-6 text-gray-500 max-w-4xl mx-auto">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
          All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  