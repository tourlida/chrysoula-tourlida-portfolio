import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useMemo } from "react";

export default function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const backgroundImg = "/static/me.jpg";

  const titleEl = useMemo(() => {
    return (
      <Stack justifyContent="center" alignItems="center" mb="32px">
        <Typography
          component="h1"
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: 300,
            fontSize: isMobile ? "32px" : "36px",
          }}
          variant="h4"
          id="resume-title"
        >
          Βιογραφικό
        </Typography>
        <div
          style={{
            marginTop: "16px",
            height: "4px",
            width: "212px",
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
      id="resume"
      style={{
        height: "fit-content",
        width: "100%",
        padding: "64px 0",
      }}
      aria-labelledby="resume-title"
      role="region"
    >
      {titleEl}
      <Grid
        container
        spacing={2}
        sx={{ height: "calc(100% - 124px)", width: "75%", margin: "auto" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Stack>
            <Stack className="top-left-corner">
              <div
                style={{
                  height: "4px",
                  width: "24px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  height: "24px",
                  width: "4px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
            </Stack>

            <Image
              src={backgroundImg}
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 500}
              style={{
                objectFit: "contain",
                borderRadius: "4px",
                width: "unset",
              }}
              alt="Picture of the psychologist"
            />

            <Stack className="bottom-right-corner" alignItems="flex-end">
              <div
                style={{
                  height: "24px",
                  width: "4px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  height: "4px",
                  width: "24px",
                  background:
                    "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
                }}
              ></div>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mb: "16px",
              fontWeight: 300,
              fontSize: isMobile ? "15px" : "18px",
              letterSpacing: '0.039em'
            }}
          >
            Ως πιστοποιημένη Ψυχολόγος και Γνωσιακή Συμπεριφορική
            Ψυχοθεραπεύτρια, είμαι επαγγελματικά εκπαιδευμένη να εφαρμόζω την
            κλινική εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία (CBT). Η
            ακαδημαϊκή μου πορεία άρχισε με την ολοκλήρωση των προπτυχιακών μου
            σπουδών στο Τμήμα Ψυχολογίας του Παντείου Πανεπιστημίου.
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mb: "16px",
              fontWeight: 300,
              fontSize: isMobile ? "15px" : "19px",
              letterSpacing: '0.039em'
            }}
          >
            Η επιδίωξη εξειδίκευσης με οδήγησε στην παρακολούθηση του ετήσιου
            προγράμματος στη Σχολική Ψυχολογία στο Πανεπιστήμιο Αιγαίου.
            Επιπλέον, συμμετείχα ενεργά στο σεμινάριο Συμβουλευτικής Ψυχολογίας
            στο Ινστιτούτο Ανάπτυξης Απασχόλησης. Για περαιτέρω εξειδίκευση,
            ολοκλήρωσα διετή κατάρτιση στη Γνωσιακή και Συμπεριφορική
            Ψυχοθεραπεία στο Κέντρο Εφαρμοσμένης Ψυχοθεραπείας και
            Συμβουλευτικής (ΚΕ.ΨΥ.ΣΥ).
          </Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{
              mb: "16px",
              fontWeight: 300,
              fontSize: isMobile ? "15px" : "19px",
              letterSpacing: '0.039em'
            }}
          >
            Πραγματοποιώ τη θεραπευτική μου εργασία τόσο στον ιδιωτικό μου χώρο,
            όπου διεξάγω ατομικές συνεδρίες με ενήλικες και εφήβους, όσο και
            μέσω των συνεργασιών μου με ιδιωτικούς θεσμούς ψυχικής υγείας. Με
            δέσμευση και επαγγελματικότητα, προσφέρω βοήθεια και καθοδήγηση στα
            άτομα καθ’ όλη την διάρκεια της ψυχολογικής τους διαδρομής,
            διασφαλίζοντας τον απόλυτο σεβασμό και εχεμύθεια.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
