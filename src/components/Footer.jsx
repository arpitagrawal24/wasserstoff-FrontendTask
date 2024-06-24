import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faLanguage,
  faSpellCheck,
  faCodeBranch,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const items1 = [
    { icon: faCodeBranch, text: "master" },
    { icon: null, text: "Launchpad" },
    { icon: faShare, text: "Live share" },
  ];

  const items2 = [
    { icon: faChevronCircleUp, text: "Ln 20, Col 40" },
    { icon: null, text: "Space: 2" },
    { icon: faLanguage, text: "UTF-8" },
    { icon: null, text: "CRLF" },
    { icon: null, text: "Go Live" },
    { icon: faSpellCheck, text: "Spell" },
    { icon: null, text: "Prettier" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between h-12 items-center bg-[#06141B] text-white px-4 py-2">
      <div className="text-sm flex flex-wrap gap-3 sm:gap-5">
        {items1.map((item, index) => (
          <p key={index} className="flex gap-2 items-center">
            {item.icon && <FontAwesomeIcon icon={item.icon} width={12} />}
            {item.text}
          </p>
        ))}
      </div>
      <div className="text-sm  flex-wrap gap-3 sm:gap-5 mt-2 sm:mt-0 hidden lg:flex">
        {items2.map((item, index) => (
          <p key={index} className="flex gap-2 items-center">
            {item.icon && <FontAwesomeIcon icon={item.icon} width={12} />}
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}
