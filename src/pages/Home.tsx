import {useMediaQuery, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const backgroundImg = "./static/logo.jpg";

  return (
    <section
      className="section grid place-content-center min-h-screen bg-gray-100"
      id="home"
      style={{
        height: "fit-content",
        width: "100%",
        paddingBottom: 0,
        border: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "green",
          background: `   linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),url(${backgroundImg})`,
          height: isMobile ? "156px" : "287px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ top: "45%", position:'absolute', color:'white',textAlign:'center'  }}>
          <h1
            style={{
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "32px",
              margin: 0,
            }}
          >
            {" "}
            ΧΡΥΣOΥΛΑ ΑΝΑΡΓ. ΤΟΥΡΛΙΔΑ
          </h1>
          <p style={{ fontWeight: 200, fontSize: isMobile ? "14px" : "21px" }}>
            {" "}
            ΨΥΧΟΛΟΓΟΣ - ΓΝΩΣΙΑΚΗ ΣΥΜΠΕΡΙΦΟΡΙΚΗ ΨΥΧΟΘΕΡΑΠΕΥΤΡΙΑ
          </p>
        </div>
      </div>
    </section>
  );
}
