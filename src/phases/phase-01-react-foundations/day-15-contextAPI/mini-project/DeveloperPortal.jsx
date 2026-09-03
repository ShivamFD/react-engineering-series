import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import Profile from "../components/Profile";

function DeveloperPortal() {
  const user = {
    name: "Shivam",
    email: "shivam@example.com",
    role: "Frontend Developer",
  };

  return (
    <ThemeContext.Provider value="dark">
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default DeveloperPortal;