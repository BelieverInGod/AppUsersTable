import UsersList from './Page/UsersList/UsersList'
import UserProfile from './Page/UserProfile/UserProfile'
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
