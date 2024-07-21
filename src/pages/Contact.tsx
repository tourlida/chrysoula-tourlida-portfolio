import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import emailjs from "@emailjs/browser";
import {
  blue,
  colorPalette,
  emailJsConfig,
  grey,
  serviceInfoData,
} from "@/constants";
import { useCallback, useMemo, useRef, useState } from "react";
import { MapWithNoSSR } from "../components/Map";

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
interface FormData {
  name?: string;
  email?: string;
  message?: string;
}
export default function Contact() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const form = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [notificationMessage, setNotificationMessage] = useState<string | null>(
    null
  );
  const [isErrorMsg, setIsErrorMsg] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);

  const validateEmail = useCallback((email?: string | null) => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email && email.toLowerCase().match(validRegex) != null) {
      return true;
    } else {
      return false;
    }
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      //Check if the email is valid
      const isEmailValid = validateEmail(formData?.email);

      setEmailError(false);
      setNameError(false);

      if (!validateEmail(formData?.email)) {
        setEmailError(true);
      }
      if (formData?.name == "") {
        setNameError(true);
      }

      if (
        form.current &&
        formData &&
        formData.name !== "" &&
        formData.message !== "" &&
        isEmailValid
      ) {
        emailjs
          .sendForm(
            emailJsConfig.serviceId,
            emailJsConfig.templateId,
            form.current,
            emailJsConfig.publicKey
          )
          .then(
            (result) => {
              console.log("send");
              setFormData(null);
              setNotificationMessage("Το μήνυμα σας στάλθηκε επιτυχώς");
              setIsErrorMsg(false);
            },
            (error) => {
              setNotificationMessage(
                "Κάποιο σφάλμα προέκυψε κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά!"
              );
              setIsErrorMsg(true);
            }
          );
      }
    },
    [formData]
  );

  const handleClose = useCallback(
    (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return;
      }

      setIsErrorMsg(false);
      setNotificationMessage(null);
    },
    []
  );

  const handleOnFormFieldChange = useCallback(
    (keyToBeUpdated: string, value: string) => {
      //Check email validation on the fly
      if (keyToBeUpdated === "email") {
        let isValidEmail = validateEmail(value);
        let debounceTimer;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(
          () => setEmailError(!isValidEmail),
          1000
        );
      }

      setFormData({
        ...formData,
        [keyToBeUpdated]: value,
      });
    },
    [formData]
  );

  const isNotificationOpen = notificationMessage !== null;

  const titleEl = useMemo(() => {
    return (
      <Stack justifyContent="center" alignItems="center" mb="32px">
        <Typography
          component="div"
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: 300,
            fontSize: isMobile ? "32px" : "36px",
          }}
          variant="h4"
        >
          Eπικοινωνία{" "}
        </Typography>
        <div
          style={{
            marginTop: "16px",
            height: "4px",
            width: "262px",
            background:
              "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
          }}
        ></div>
      </Stack>
    );
  }, [isMobile]);

  const col2 = useMemo(() => {
    return (
      <Grid
        container
        spacing={2}
        sx={{
          "&.MuiGrid-root": {
            padding: "36px 0",
            width: "100%",
            marginLeft: isMobile ? "0" : "-16px",
            margin: isMobile ? "0" : "unset",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{
            padding: "0 !important",
          }}
        >
          <div
            style={{
              display: "flex",
              width: isMobile ? "100%" : "90%",
              margin: "auto",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {serviceInfoData.map((serviceItem, idx) => {
              return (
                <div
                  style={{
                    width: isMobile ? "100%" : "50%",
                    minWidth: "300px",
                  }}
                  key={`contact-card-${idx}`}
                >
                  <Stack
                    style={{
                      margin: "8px 0px",
                      width: "300px",
                      minWidth: "300px",
                      height: "96px",
                    }}
                  >
                    <Stack direction="row" alignItems="flex-start">
                      <div
                        style={{
                          height: isMobile ? "24px" : "30px",
                          width: isMobile ? "24px" : "30px",
                          position: "relative",
                          top: isMobile ? "2px" : "4px",
                        }}
                      >
                        {serviceItem.icon}
                      </div>
                      <Stack sx={{ ml: "8px" }}>
                        <Typography
                          component="div"
                          variant="subtitle1"
                          sx={{
                            color: "black",
                            opacity: 0.7,
                            fontSize: isMobile ? "15px" : "19px",
                          }}
                        >
                          {serviceItem.title}
                        </Typography>
                        {serviceItem.value}
                      </Stack>
                    </Stack>
                  </Stack>
                </div>
              );
            })}

            <div
              style={{ height: "424px", width: "100%", marginBottom: "16px" }}
              aria-label="Χάρτης"
              role="region"
            >
              <MapWithNoSSR />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }, [isMobile]);

  return (
    <section
      className="section grid place-content-center min-h-screen bg-gray-100"
      id="contact"
      style={{
        height: "fit-content",
        border: 0,
        padding: isMobile ? "64px 0px 0px 0px" : "64px 0 24px 0px",
      }}
      aria-labelledby="contact-title"
      role="region"
    >
      {titleEl}
      <Grid
        container
        spacing={2}
        sx={{
          "&.MuiGrid-root": {
            padding: "36px 0 0 0",
            width: isMobile ? "85%" : "100%",
            margin: isMobile ? "auto" : "unset",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{
            padding: "0 !important",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form
            ref={form}
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{
              height: "100%",
              padding: "36px 48px",
              boxShadow: " 4px 5px 58px -1px rgba(0,0,0,0.22)",
              borderRadius: "4px",
              maxWidth: "450px",
              minWidth: "200px",
            }}
            aria-describedby="form-description"
          >
            <Stack
              sx={{
                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                variant="h4"
                sx={{
                  mb: 1,
                  width: "100%",
                  color: colorPalette.main,
                  fontSize: isMobile ? "19px" : "24px",
                  textWrap: "nowrap",
                }}
                id="form-title"
              >
                Στείλτε μας ένα μήνυμα
              </Typography>
              <Typography
                component="div"
                variant="caption"
                sx={{
                  opacity: "0.5",
                  mb: 6,
                  fontSize: isMobile ? "13px" : "16px",
                }}
                id="form-description"
              >
                Μη διστάσετε να επικοινωνήσετε μαζί μας εάν έχετε οποιαδήποτε
                περαιτέρω ερώτηση ή ανησυχία ή θέλετε να κλείσετε ένα ραντεβού
              </Typography>

              <TextField
                label="Ονοματεπώνυμο"
                onChange={(e) =>
                  handleOnFormFieldChange("name", e.target.value)
                }
                required
                aria-required="true"
                variant="outlined"
                color="secondary"
                type="text"
                inputProps={{ style: { fontSize: isMobile ? "15px" : "18px" } }}
                sx={{
                  mb: 3,
                }}
                fullWidth
                value={formData?.name ?? ""}
                name="name"
                error={nameError}
                aria-invalid={nameError}
                aria-errormessage={nameError ? "name-error" : undefined}
              />
              <TextField
                label="Email"
                onChange={(e) =>
                  handleOnFormFieldChange("email", e.target.value)
                }
                required
                aria-required="true"
                variant="outlined"
                color="secondary"
                type="email"
                name="email"
                inputProps={{ style: { fontSize: isMobile ? "15px" : "18px" } }}
                sx={{
                  mb: 3,
                }}
                fullWidth
                value={formData?.email ?? ""}
                error={emailError}
                aria-invalid={emailError}
                aria-errormessage={emailError ? "email-error" : undefined}
              />
              <StyledTextarea
                aria-label="minimum height"
                minRows={1}
                maxRows={2}
                placeholder="Παρακαλώ πληκτρολογήστε το μήνυμα σας"
                onChange={(e) =>
                  handleOnFormFieldChange("message", e.target.value)
                }
                value={formData?.message ?? ""}
                sx={{
                  mb: 6,
                  fontSize: isMobile ? "15px" : "18px",
                  minHeight: "150px",
                  maxHeight: "250px",
                }}
                name="message"
                aria-required="true"
              />

              <Button
                aria-label="Αποστολή"
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
                role="button"
                sx={{
                  minWidth: "200px",
                  maxWidth: "250px",
                  borderRadius: "16px",
                  padding: "8px",
                  backgroundColor: colorPalette.main,
                  "&:hover": {
                    backgroundColor: "#3D717E",
                  },
                  "&:active": {
                    backgroundColor: "#3D717E",
                  },
                }}
              >
                Αποστολή
              </Button>
            </Stack>
          </form>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          sx={{
            padding: "0 !important",
          }}
        >
          {col2}
        </Grid>
      </Grid>

      <Snackbar
        open={isNotificationOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        role="alert"
      >
        <Alert severity={isErrorMsg ? "error" : "success"} role="alert">
          {notificationMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}
