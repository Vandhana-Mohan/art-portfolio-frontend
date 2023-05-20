import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-base sm:text-lg">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/developers"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  About Developer
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/newsletter"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  Subscribe to our Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-base sm:text-lg">
            <h3 className="text-gray-700 font-bold mb-4">Social Media</h3>
            <ul className="space-y-4">
              <li>
                <SocialMediaIconLink
                  url="https://facebook.com/"
                  iconClassName="fab fa-facebook-square"
                />{" "}
                Facebook
              </li>
              <li>
                <SocialMediaIconLink
                  url="https://instagram.com/"
                  iconClassName="fab fa-instagram"
                />{" "}
                Instagram
              </li>
              <li>
                <SocialMediaIconLink
                  url="https://twitter.com/"
                  iconClassName="fab fa-twitter-square"
                />{" "}
                Twitter
              </li>
              <li>
                <SocialMediaIconLink
                  url="https://youtube.com/"
                  iconClassName="fab fa-youtube"
                />{" "}
                YouTube
              </li>
              <li>
                <SocialMediaIconLink
                  url="https://github.com/Vandhana-Mohan"
                  iconClassName="fab fa-github"
                />{" "}
                GitHub
              </li>
              <li>
                <SocialMediaIconLink
                  url="https://www.linkedin.com/in/vandhanamohan/"
                  iconClassName="fab fa-linkedin"
                />{" "}
                LinkedIn
              </li>
            </ul>
          </div>

          <div className="text-base sm:text-lg">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/signup"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  Sign Up/Create Account
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/forgot-password"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  Forgot Password
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/help-support"
                  className="text-gray-700 hover:text-red-700 hover:underline"
                >
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8 text-xs sm:text-base">
          © 2023 Vandhana Mohan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
function SocialMediaIconLink({ url, iconClassName }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-red-700 transition duration-300"
    >
      <i className={iconClassName + " text-2xl"}></i>
    </a>
  );
}
export default Footer;
