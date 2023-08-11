import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";
import Image from "next/image";

const itemData = [
  {
    imgPath: "/static/office_1.jpg",
  },
  {
    imgPath: "/static/office_2.jpg",
  },
  {
    imgPath: "/static/office_4.jpg",
  },
  {
    imgPath: "/static/office_3.jpg",
  },
  
];
export default function Office() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const titleEl = useMemo(()=>{
    return <Stack justifyContent="center" alignItems="center" mb="32px">
    <Typography
      component="div"
      sx={{
        width: "100%",
        textAlign: "center",
        fontWeight: 300,
        fontSize : isMobile ? '32px' : '36px'
      }}
      variant="h4"
    >
     Το Ιατρείο μας{" "}
    </Typography>
    <div
      style={{
        marginTop:'16px',
        height: "4px",
        width: "262px",
        background:
          "linear-gradient(90deg, rgba(111,168,184,1) 0%, rgba(61,114,128,1) 100%)",
      }}
    ></div>
  </Stack>
  },[isMobile]);

  return (
    <section
      className="section grid place-content-center min-h-screen bg-gray-100"
      id="office"
      style={{
        height: "fit-content",
        padding:'64px 0',
        margin:'auto'
      }}
    >
      {titleEl}
      <Box sx={{ width:'75%', margin: "auto", height: "fit-content" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.imgPath}>
            <img
                src={`${item.imgPath}?w=248&fit=crop&auto=format`}
                srcSet={`${item.imgPath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={'Office'}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  );
}
