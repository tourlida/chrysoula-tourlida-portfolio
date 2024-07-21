import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NavbarProps } from ".";
import Link from "next/link";
const backgroundImg = "./static/logo.jpg";

export default function DesktopNavbar({
  menuOptions,
  selectedSectionId,
  onOptionClick,
}: NavbarProps) {
  const logoEl = (
    <Link
      aria-label= "Επιστροφή στην αρχική σελίδα"
      className="btn"
      href={
        typeof window !== "undefined"
          ? `${window.location.origin}/#home`
          : `/#home`
      }
      style={{ textDecoration: "none", color: "black" }}
      onClick={()=>{onOptionClick('')}}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block", color: "black" },
        }}
      >
        <Stack direction="row" alignItems="center">
          <div
            style={{
              backgroundColor: "green",
              background: `url(${backgroundImg})`,
              height: 32,
              width: 32,
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

  return (
    <AppBar component="nav" style={{ backgroundColor: "white" }}>
      <Toolbar sx={{justifyContent:'space-between'}}>
        {logoEl}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {menuOptions.map((item) => (
            <Button
              key={item.label}
              sx={{
                "&.MuiButtonBase-root": {
                  color:'black',
                  textTransform: "none",
                  backgroundColor:'transparent',
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#477B85",
                  },
                  "&:active": {
                    backgroundColor: "transparent",
                    color: "#477B85",
                  },
                },
              }}
              disableRipple={true}
              disableTouchRipple={true}
              onClick={() => onOptionClick(item.routePath)}
            >
              <Link
                className="btn"
                aria-label= "Επιστροφή στην αρχική σελίδα"
                href={
                  typeof window !== "undefined"
                    ? `${window.location.origin}/#${item.routePath}`
                    : `/#${item.routePath}`
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  component="div"
                  style={{
                    fontSize: "17px",
                    fontWeight: 300,
                    lineHeight: "21px",
                  }}
                >
                  {item.label}
                </Typography>
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
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
