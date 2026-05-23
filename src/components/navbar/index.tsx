import { Badge, Box, Container, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useGlobals } from "../../hooks/useGlobals";
import { getImageUrl } from "../../lib/config";
import Cookies from "universal-cookie";
import { MemberType } from "../../types/enums/member.enum";

export default function Navbar() {
  const { authMember, setAuthMember } = useGlobals();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    const cookies = new Cookies();
    cookies.remove("accessToken");
    localStorage.removeItem("memberData");
    setAuthMember(null);
  };

  console.log("+authMember:", authMember);

  return (
    <div className="navbar">
      <Container className="container">
        {/* LOGO SECTION */}
        <Stack className="logo-section">
          <NavLink to="/">
            <img src="/logo.webp" alt="" />
          </NavLink>
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

            <Box className="login-user" onClick={handleClick}>
              <img src={getImageUrl(authMember?.memberImage)} alt="" />
              <span>{authMember.memberNick}</span>
              <KeyboardArrowDownIcon />
            </Box>

            <Menu
              id={"menu-id"}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "menu-id",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  if (authMember.memberType === MemberType.COMPANY) {
                    navigate("/company/dashboard");
                  } else if (authMember.memberType === MemberType.ADMIN) {
                    navigate("/admin/dashboard");
                  } else {
                    navigate("/my-page");
                  }
                }}
              >
                My Page
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logoutHandler();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        ) : (
          <Stack className="login-section">
            <button
              className="reg-btn"
              onClick={() => navigate("/join?register=true")}
            >
              Register
            </button>
            <button className="login-btn" onClick={() => navigate("/join")}>
              Login
            </button>
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
