export default function Footer() {
  return (
    <footer className="bg-[#f5f1eb] border-t border-[#e8e2d8] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold font-['Playfair_Display'] text-[#6b5d52] mb-2">
              Letters
            </p>
            <p className="text-sm text-[#9d8b7e]">
              A digital archive for words people never got to say.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[#6b5d52] mb-4 font-['Playfair_Display']">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#9d8b7e]">
              <li>
                <a href="/letters" className="hover:text-[#6b5d52] transition-colors">
                  Browse Letters
                </a>
              </li>
              <li>
                <a href="/write" className="hover:text-[#6b5d52] transition-colors">
                  Write a Letter
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:text-[#6b5d52] transition-colors">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#6b5d52] mb-4 font-['Playfair_Display']">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#9d8b7e]">
              <li>
                <a href="#" className="hover:text-[#6b5d52] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b5d52] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b5d52] transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[#6b5d52] mb-4 font-['Playfair_Display']">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-[#9d8b7e]">
              <li>
                <a href="#" className="hover:text-[#6b5d52] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b5d52] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#6b5d52] transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#e8e2d8] pt-8 text-center text-sm text-[#9d8b7e]">
          <p>&copy; 2024 Letters Never Sent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
