
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Menu as MenuIcon, ShoppingBag, User, Search, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              HomeFoodi
            </Link>
            <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2 max-w-md">
              <Search className="w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search for restaurants, food..." 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                variant={isActive("/menu") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <MenuIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Menu</span>
              </Button>
            </Link>
            <Link to="/orders">
              <Button 
                variant={isActive("/orders") ? "default" : "ghost"} 
                className="flex items-center space-x-2 relative"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Orders</span>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favorites</span>
            </Button>
            <Link to="/profile">
              <Button 
                variant={isActive("/profile") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
