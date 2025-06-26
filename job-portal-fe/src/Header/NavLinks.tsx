import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { id: "find-jobs", name: "Find Job", url: "find-jobs" },
    { id: "find-talent", name: "Find Talent", url: "find-talent" },
    { id: "upload-job", name: "Upload Job", url: "upload-job" },
    { id: "about", name: "About Us", url: "about" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-6 text-lg h-full items-center text-mine-shaft-200">
      {links.map((link) => (
        <div
          key={link.id}
          className={`${
            location.pathname === "/" + link.url
              ? "border-bright-sun-400 text-bright-sun-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to= {"/" +link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};
export default NavLinks;
 