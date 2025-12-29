import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold ">Job Hunt</h2>
            <p className="text-sm">© JobPortal 2025. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.205-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.154-5.144-.424.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.016-.63.961-.689 1.8-1.56 2.46-2.548z" />
</svg>

            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.452 20.452h-3.5v-5.569c0-1.328-.026-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.94v5.665h-3.5V9h3.36v1.561h.049c.467-.886 1.61-1.82 3.31-1.82 3.54 0 4.19 2.33 4.19 5.36v6.35z" />
</svg>

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
