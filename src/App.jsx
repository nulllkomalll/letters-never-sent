import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BrowseLetters from "./pages/BrowseLetters";
import LetterDetails from "./pages/LetterDetails";
import WriteLetter from "./pages/WriteLetter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/letters" element={<BrowseLetters />} />

        <Route
          path="/letters/:id"
          element={<LetterDetails />}
        />

        <Route path="/write" element={<WriteLetter />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;