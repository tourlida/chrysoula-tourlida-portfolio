import { useMediaQuery, useTheme } from "@mui/material";

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
      aria-labelledby="home-title"
      role="region"
    >
      <div
        style={{
          backgroundColor: "green",
          background: `linear-gradient(
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
        aria-label="Background Image with Title and Subtitle"
      >
        <div
          style={{
            top: "45%",
            position: "absolute",
            color: "white",
            textAlign: "center",
          }}
          aria-labelledby="home-title home-subtitle"
        >
          <h1
            id="home-title"
            style={{
              fontWeight: 400,
              fontSize: isMobile ? "16px" : "32px",
              margin: 0,
            }}
          >
            ΧΡΥΣOΥΛΑ ΑΝΑΡΓ. ΤΟΥΡΛΙΔΑ
          </h1>
          <p
            id="home-subtitle"
            style={{
              fontWeight: 200,
              fontSize: isMobile ? "14px" : "21px",
            }}
          >
            ΨΥΧΟΛΟΓΟΣ - ΓΝΩΣΙΑΚΗ ΣΥΜΠΕΡΙΦΟΡΙΚΗ ΨΥΧΟΘΕΡΑΠΕΥΤΡΙΑ
          </p>
        </div>
      </div>
    </section>
  );
}
