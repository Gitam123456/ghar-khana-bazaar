
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Menu, ShoppingBag, User } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Ghar Khana Bazaar
            </Link>
          </div>
          
          <nav className="flex space-x-4">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                variant={isActive("/menu") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </Button>
            </Link>
            <Link to="/orders">
              <Button 
                variant={isActive("/orders") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Orders</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button 
                variant={isActive("/profile") ? "default" : "ghost"} 
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
