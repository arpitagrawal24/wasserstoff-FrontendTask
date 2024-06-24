import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCodeCompare,
  faCodeFork,
  faCodePullRequest,
  faCopy,
  faExternalLinkSquare,
  faRunning,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function SideIcons() {
  const icons = [
    { icon: faCopy, tooltip: "Copy" },
    { icon: faSearch, tooltip: "Search" },
    { icon: faCodeBranch, tooltip: "Branch" },
    { icon: faRunning, tooltip: "Run" },
    { icon: faExternalLinkSquare, tooltip: "External Link" },
    { icon: faCodeFork, tooltip: "Fork" },
    { icon: faCodePullRequest, tooltip: "Pull Request" },
    { icon: faCodeCompare, tooltip: "Compare" },
  ];

  return (
    <div className="w-14 bg-[#06141B] flex flex-col gap-6 items-center py-5">
      {icons.map((item, index) => (
        <div key={index} className="relative group">
          <FontAwesomeIcon
            icon={item.icon}
            className="text-white hover:text-blue-400 transition-colors duration-200"
            size="xl"
          />
          <span className="absolute left-full ml-2 whitespace-no-wrap text-xs text-white bg-gray-700 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
            {item.tooltip}
          </span>
        </div>
      ))}
    </div>
  );
}
