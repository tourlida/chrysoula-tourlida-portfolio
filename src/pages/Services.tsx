import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colorPalette, services } from "@/constants";
import CheckIcon from "@mui/icons-material/Check";
import { useMemo } from "react";

function ServiceCard(data: any) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let serviceItem = data.serviceItem;
  return (
    <Stack
      sx={{
        border: "1px solid #efefef",
        padding: "24px 16px",
        borderRadius: "16px",
        height: isMobile
          ? "fit-content"
          : serviceItem.bullets
          ? "100%"
          : "212px",
        maxHeight: isMobile
          ? "fit-content"
          : serviceItem.bullets
          ? "600px"
          : "212px",
        boxShadow: "9px 14px 42px -4px rgba(0,0,0,0.10)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        mb="16px"
      >
        {serviceItem.icon}
        <Typography
          component="h2"
          variant="h5"
          sx={{
            marginLeft: "4px",
            fontWeight: 400,
            fontSize: isMobile ? '19px' : '24px'
          }}
          id={`service-title-${serviceItem.title}`}
        >
          {serviceItem.title}
        </Typography>
      </Stack>

      <Typography
        component="p"
        variant="body1"
        sx={{
          padding: "0 16px",
          fontWeight: 300,
          fontSize: isMobile ? '15px' : '19px',
          letterSpacing: '0.039em'
        }}
      >
        {serviceItem.mainContent}
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          width: "calc(100% - 32px)",
          maxWidth: "100%",
          flexWrap: "wrap",
          margin: "16px 0",
        }}
      >
        {serviceItem.bullets && serviceItem.bullets.map((bulletText: string, idx: number) => {
          return (
            <Grid
              item
              xs={6}
              md={6}
              sx={{ minWidth: "135px" }}
              key={`service-${serviceItem.title}-bullet-${idx}`}
            >
              <Stack direction="row" sx={{ margin: "4px 0" }}>
                <CheckIcon sx={{ color: colorPalette.main }} />
                <Typography
                  component="p"
                  sx={{
                    marginLeft: "4px",
                    fontWeight: 300,
                    fontSize: isMobile ? '14px' : '18px',
                    letterSpacing: '0.039em'
                  }}
                  variant="body2"
                >
                  {bulletText}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default function Services() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const titleEl = useMemo(() => {
    return (
      <Stack justifyContent="center" alignItems="center" mb="32px">
        <Typography
          component="h1"
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: 300,
            fontSize: isMobile ? '32px' : '36px'
          }}
          variant="h4"
          id="services-title"
        >
          Υπηρεσίες
        </Typography>
        <div
          style={{
            marginTop: '16px',
            height: "4px",
            width: "190px",
            background:
              "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
          }}
        ></div>
      </Stack>
    );
  }, [isMobile]);

  return (
    <section
      className="section grid place-content-center min-h-screen bg-gray-100"
      id="services"
      style={{
        height: "fit-content",
        width: '100%',
        padding: "64px 0",
        marginBottom: "32px",
      }}
      aria-labelledby="services-title"
    >
      {titleEl}
      <Grid
        container
        spacing={2}
        sx={{
          height: "calc(100% - 124px)",
          "&.MuiGrid-root": {
            width: "75%",
            margin: "auto",
          },
        }}
      >
        {services.map((serviceItem, idx) => {
          return (
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              key={`service-item-${idx}`}
              aria-labelledby={`service-title-${serviceItem.title}`}
            >
              <ServiceCard serviceItem={serviceItem} />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}
