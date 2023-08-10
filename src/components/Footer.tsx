const Footer = () => {
  return (
    <>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontWeight: 300,
            fontSize: "12px",
            color: "rgb(102, 102, 102)",
          }}
        >
          &copy; {new Date().getFullYear()} Vagia Tourlida. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
