import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarProps } from ".";
import Link from "next/link";
const backgroundImg = "./static/logo.jpg";

const MobileNavbar = ({
  menuOptions,
  selectedSectionId,
  onOptionClick,
}: NavbarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  }, []);

  const container =
    window !== undefined ? () => window.document.body : undefined;
  const drawerWidth = 240;

  const logoEl = (
    <Link
      className="btn"
      aria-label= "Επιστροφή στην αρχική σελίδα"
      href={
        typeof window !== "undefined"
          ? `${window.location.origin}/#home`
          : `/#home`
      }
      style={{ textDecoration: "none", color: "black" }}
      onClick={() => {
        onOptionClick("");
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ padding: "16px 8px", color: "black" }}
      >
        <Stack direction="row" alignItems="center">
          <div
            style={{
              backgroundColor: "green",
              background: `url(${backgroundImg})`,
              height: 28,
              width: 28,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
          <Stack>
            <Typography component="div" sx={{ fontWeight: 400 }}>
              ΧΡΥΣΟΥΛΑ ΤΟΥΡΛΙΔΑ
            </Typography>
          </Stack>
        </Stack>
      </Typography>
    </Link>
  );
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {logoEl}
      <Divider />
      <List>
        {menuOptions.map((item) => (
          <Link
            key={item.label}
            className="btn"
            aria-label= "Επιστροφή στην αρχική σελίδα"
            href={
              typeof window !== "undefined"
                ? `${window.location.origin}/#${item.routePath}`
                : `/#${item.routePath}`
            }
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton
              disableRipple={true}
              disableTouchRipple={true}
              sx={{
                textAlign: "center",
                color: "black",
                textTransform: "none",
                backgroundColor: "transparent",
                "&.MuiButtonBase-root": {
                  "&:hover": {
                    background: "transparent",
                    color: "#477B85",
                  },
                  "&:active": {
                    background: "transparent",
                    color: "#477B85",
                  },
                },
              }}
              onClick={() => onOptionClick(item.routePath)}
            >
              <Typography
                component="div"
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "21px",
                }}
              >
                {item.label}
                {selectedSectionId === item.routePath && (
                  <div
                    style={{
                      height: "2px",
                      width: "100%",
                      background:
                        "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                    }}
                  ></div>
                )}
              </Typography>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" style={{ backgroundColor: "white" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          {logoEl}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              color: "black",
              margin: 0,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        open={isDrawerOpen}
        disableScrollLock={true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRadius: "0 4px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default MobileNavbar;
