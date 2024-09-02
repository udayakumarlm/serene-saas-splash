import { HomeIcon, InfoIcon, HelpCircleIcon, ShoppingCartIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Help from "./pages/Help.jsx";
import BuyNow from "./pages/BuyNow.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <Help />,
  },
  {
    title: "Buy Now",
    to: "/buy-now",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    page: <BuyNow />,
  },
];