import {
  IconAnchor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {
  const footerLinks = {
    product: ["Find Job", "Find Company", "Find Employee"],
    company: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"],
    support: ["Help & Support", "Feedback", "FAQs"],
  };

  return (
    <footer className="bg-mine-shaft-900 text-mine-shaft-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: JobHook */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IconAnchor className="text-bright-sun-400" size={28} />
              <h3 className="text-2xl font-bold text-bright-sun-400">
                JobHook
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              Job portal with user profiles, skill updates, certifications, work
              experience and admin job postings.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="group">
                <div className="w-9 h-9 flex items-center justify-center bg-mine-shaft-800 rounded-full transition-colors duration-300 group-hover:bg-bright-sun-400">
                  <IconBrandFacebook
                    size={20}
                    className="text-bright-sun-400 transition-colors duration-300 group-hover:text-mine-shaft-900"
                  />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-9 h-9 flex items-center justify-center bg-mine-shaft-800 rounded-full transition-colors duration-300 group-hover:bg-bright-sun-400">
                  <IconBrandInstagram
                    size={20}
                    className="text-bright-sun-400 transition-colors duration-300 group-hover:text-mine-shaft-900"
                  />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-9 h-9 flex items-center justify-center bg-mine-shaft-800 rounded-full transition-colors duration-300 group-hover:bg-bright-sun-400">
                  <IconBrandX
                    size={20}
                    className="text-bright-sun-400 transition-colors duration-300 group-hover:text-mine-shaft-900"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="md:justify-self-center">
            <h4 className="font-bold text-lg text-bright-sun-400 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-bright-sun-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:justify-self-center">
            <h4 className="font-bold text-lg text-bright-sun-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-bright-sun-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="md:justify-self-center">
            <h4 className="font-bold text-lg text-bright-sun-400 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-bright-sun-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
