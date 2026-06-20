import { Link } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-[#faf8f3] border-b border-[#e8e2d8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold font-['Playfair_Display'] text-[#6b5d52] hover:text-[#3a342f] transition-colors"
          >
            Letters
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/letters"
              className="text-[#9d8b7e] hover:text-[#6b5d52] transition-colors font-[Inter] text-sm"
            >
              Browse Letters
            </Link>
            <Link
              to="/write"
              className="text-[#9d8b7e] hover:text-[#6b5d52] transition-colors font-[Inter] text-sm"
            >
              Write a Letter
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button to="/login" variant="ghost" size="sm">
              Log In
            </Button>
            <Button to="/signup" variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
