import { BsArrowLeftRight } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";

export const Tabs = [
  {
    tabName: "Transactions",
    pathName: "/transactions",
    icon: <BsArrowLeftRight size={40} />,
  },
  {
    tabName: "Cateogries",
    pathName: "/categories",
    icon: <FaTags size={40} />,
  },
  {
    tabName: "Overview",
    pathName: "/overview",
    icon: <AiFillPieChart size={40} />,
  },
];
