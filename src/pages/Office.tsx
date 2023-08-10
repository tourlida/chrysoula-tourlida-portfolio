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
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
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
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  );
}
