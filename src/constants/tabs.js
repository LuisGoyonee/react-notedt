import { BsArrowLeftRight } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";

export const Tabs = [
  {
    tabName: "Transactions",
    pathName: "/",
    icon: <BsArrowLeftRight size={40} />,
  },
  {
    tabName: "Overview",
    pathName: "/overview",
    icon: <AiFillPieChart size={40} />,
  },
];
