import { Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";

export const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

export const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

export const colorPalette = {
  main: "#17888d",
  secondary1: "#59A9AA",
  secondary2: "#90BBBC",
  secondary3: "#E7DEE4",
};

export const emailJsConfig = {
  serviceId: "service_gcnejqm",
  templateId: "template_rq16gdl",
  publicKey: "ksn1gG7FEpNVxXH13",
};

export const websiteUrl= 'https://localhost:3000'
//----------------------------------------------------
//Data
export const menuOptions = [
  { label: "Αρχική", routePath: "home" },
  {
    label: "Βιογραφικό",
    routePath: "resume",
  },
  {
    label: "Υπηρεσίες",
    routePath: "services",
  },
  {
    label: "Το Ιατρείο μας",
    routePath: "office",
  },
  {
    label: "Επικοινωνία",
    routePath: "contact",
  },
];

export const metadata: {
  title: string;
  description: string;
} = {
  title: "ΧΡΥΣΟΥΛΑ ΤΟΥΡΛΙΔΑ - ΨΥΧΟΛΟΓΟΣ",
  description: "ΧΡΥΣΟΥΛΑ ΤΟΥΡΛΙΔΑ - ΨΥΧΟΛΟΓΟΣ",
};


export const services =  [
  {
    icon: (
      <PsychologyIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Ψυχοθεραπεία",
    mainContent:
      "Η συνεδρία ατομικής ψυχοθεραπείας αφορά την οικοδόμηση μιας υγιούς σχέσης εμπιστοσύνης και κατανόησης ανάμεσα στον θεραπευτή και τον   θεραπευόμενο. Ο τελευταίος μέσω ειλικρινούς επικοινωνίας και αποδοχής ενθαρρύνεται να αναγνωρίζει και να διαχειρίζεται τις συναισθηματικές  δυσκολίες. Ενδείκνυται για τα εξής πεδία:",
    bullets: [
      "Κατάθλιψη",
      "Γενικευμένο άγχος",
      "Κρίσεις πανικού",
      "Κοινωνίκη φοβία",
      "Αγοροφοβία",
      "Διατροφικές διαταραχές",
      "Τραύμα",
      "Χαμηλή αυτοεκτίμηση",
    ],
  },
  {
    icon: (
      <ConnectWithoutContactIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Συμβουλευτική",
    mainContent:
      "Η συμβουλευτική εστιάζει στην βελτίωση της καθημερινότητας και στην αναζήτηση λειτουργικών τρόπων διαχείρισης των προβληματων .Ενδείκνυται για τα εξής πεδία:",
    bullets: [
      "Πένθος",
      "Καθημερινές δυσκολίες",
      "Δυσκολίες διαπροσωπικών σχέσεων",
      "Δυσκολίες διαπροσωπικής επικοινωνίας",
      "Δυσκολίες σε σχέση με την γονεϊκότητα",
    ],
  },
  {
    icon: (
      <GroupIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Θεραπεία ζεύγους",
    mainContent:
      "Βασικός στόχος είναι να δώσει στο ζευγάρι τα κατάλληλα εφόδια και εργαλεία ώστε να βελτιωθεί η μεταξύ τους επικοινωνία και να βρεθούν λύσεις σε τυχόν δυσλειτουργίες.",
  },
  {
    icon: (
      <LanguageIcon
        sx={{ color: colorPalette.main, width: "32px", height: "32px" }}
      />
    ),
    title: "Online συνεδρίες",
    mainContent:
      " Όλες οι παραπάνω υπηρεσίες παρέχονται και διαδικτυακά είτε λόγω απόστασης είτε λόγω άλλων δυσκολιών.",
  },
];
export const serviceInfoData = [
  {
    icon: (
      <PlaceIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Διεύθυνση",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        Σεβαστουπόλεως 114 , Αμπελόκηποι 115 26
      </Typography>
    ),
  },
  {
    icon: (
      <AccessTimeFilledIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Ώρες λειτουργίας",
    value: (
      <Stack>
        <Typography
          component="div"
          variant="body2"
          sx={{ opacity: 0.5, fontSize: "14px" }}
        >
          Δευτέρα έως Παρασκευή: 10π.μ.- 9μ.μ.
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{ opacity: 0.5, fontSize: "14px" }}
        >
          Σάββατο: 10π.μ.- 6μ.μ.
        </Typography>
      </Stack>
    ),
  },
  {
    icon: (
      <EmailIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Email",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        tourlida.xrisoula@gmail.com
      </Typography>
    ),
  },
  {
    icon: (
      <PhoneIcon
        style={{
          color: "white",
          borderRadius: "4px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
        }}
      />
    ),
    title: "Τηλέφωνο",
    value: (
      <Typography
        component="div"
        variant="body2"
        sx={{ opacity: 0.5, fontSize: "14px" }}
      >
        +30 6987589167
      </Typography>
    ),
  },
];

