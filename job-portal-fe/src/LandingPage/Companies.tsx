import Marquee from "react-fast-marquee";

const companies = [
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg",
    alt: "Google logo",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg",
    alt: "Microsoft logo",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg",
    alt: "Apple logo",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg",
    alt: "Meta logo",
  },
  {
    name: "Amazon",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg",
    alt: "Amazon logo",
  },
  {
    name: "Netflix",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg",
    alt: "Netflix logo",
  },
  {
    name: "IBM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/ibm.svg",
    alt: "IBM logo",
  },
  {
    name: "Shopify",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg",
    alt: "Shopify logo",
  },
  {
    name: "Oracle",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/oracle.svg",
    alt: "Oracle logo",
  },
  {
    name: "Adobe",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg",
    alt: "Adobe logo",
  },
  {
    name: "Intel",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/intel.svg",
    alt: "Intel logo",
  },
  {
    name: "Salesforce",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg",
    alt: "Salesforce logo",
  },
];

const Companies = () => {
  return (
    <div className="mt-20 pb-5 mb-10">
      <div className="text-4xl text-center font-semibold text-mine-shaft-100">
        Trusted By Over <span className="text-bright-sun-400">1000+</span>{" "}
        Companies
      </div>
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="mt-8">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="mx-8 px-4 py-3 hover:bg-mine-shaft-900 cursor-pointer flex items-center space-x-3 rounded-lg transition-colors duration-200"
          >
            <img
              src={company.logo}
              alt={company.alt}
              className="h-8 w-8 object-contain filter"
              loading="lazy"
            />
            <span className="text-mine-shaft-100 font-medium text-lg whitespace-nowrap">
              {company.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
