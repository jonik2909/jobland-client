import { Badge, Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const authMember = false;

  return (
    <div className="navbar">
      <Container className="container">
        {/* LOGO SECTION */}
        <Stack className="logo-section">
          <img src="/logo.webp" alt="" />
        </Stack>

        {/* ROUTER SECTION */}
        <Stack className="router-section">
          <Stack className="router-main">
            <Box className="router">
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box className="router">
              <NavLink to="/jobs">Jobs Page</NavLink>
            </Box>
            <Box className="router">
              <NavLink to="/companies">Companies Page</NavLink>
            </Box>
            <Box className="router">
              <NavLink to="/candidates">Candidates Page</NavLink>
            </Box>
          </Stack>
        </Stack>

        {/* LOGIN SECTION */}
        {authMember ? (
          <Stack className="login-user-box">
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon color="action" />
            </Badge>

            <Box className="login-user">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s"
                alt=""
              />
              <span>Justin</span>
              <KeyboardArrowDownIcon />
            </Box>
          </Stack>
        ) : (
          <Stack className="login-section">
            <button className="reg-btn">Register</button>
            <button className="login-btn">Login</button>
          </Stack>
        )}
      </Container>
    </div>
  );
}

/**
 <>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/jobs">Jobs Page</NavLink>
      </div>
      <div>
        <NavLink to="/companies">Companies Page</NavLink>
      </div>
      <div>
        <NavLink to="/candidates">Candidates Page</NavLink>
      </div>

      <div>
        <NavLink to="/join">Join Page</NavLink>
      </div>
    </>
 */
