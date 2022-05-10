import { BsArrowLeftRight } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";

export const Tabs = [
  {
    tabName: "Overview",
    pathName: "/",
    icon: <AiFillPieChart size={40} />,
  },
  {
    tabName: "Transactions",
    pathName: "/transactions",
    icon: <BsArrowLeftRight size={40} />,
  },
];
