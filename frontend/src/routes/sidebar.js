/** Icons are imported separatly to reduce build time */
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/app/leads", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Gym", // name that appear in Sidebar
  },

  {
    path: "/app/salary", // url
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    name: "Salary", // name that appear in Sidebar
  },

  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Customer Setup", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/customer", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Customer List", // name that appear in Sidebar
      },
      {
        path: "/app/Slots", // url
        icon: <CalendarDaysIcon className={iconClasses} />, // icon component
        name: "Slots", // name that appear in Sidebar
      },
      {
        path: "/app/fees",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Fees",
      },
    ],
  },
  {
    path: "/app/report", // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: "Reports", // name that appear in Sidebar
  },
  {
    path: "/app/attendance", // url
    icon: <CalendarDaysIcon className={iconClasses} />, // icon component
    name: "Attendance", // name that appear in Sidebar
  },

  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/settings-profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Gym Profile", // name that appear in Sidebar
      },
      {
        path: "/app/calendar", // url
        icon: <CalendarDaysIcon className={iconClasses} />, // icon component
        name: "Employeers", // name that appear in Sidebar
      },
      {
        path: "/app/settings-team", // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: "Trainers", // name that appear in Sidebar
      },
    ],
  },
];

export default routes;
