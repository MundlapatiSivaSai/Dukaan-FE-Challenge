export const navbarStyles = {
  appBar: {
    boxShadow: "none",
  },
  toolbar: {
    bgcolor: "#FFF",
    color: "#000",
    borderBottom: "1px solid #D9D9D9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    display: {
      xs: "none",
      sm: "flex",
      gap: 16,
    },
    alignItems: "center",
    color: "#1A181E",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
  },
  helpText: {
    display: "flex",
    fontSize: 12,
    alignItems: "center",
  },
  search: {
    width: 400,
    backgroundColor: "#F2F2F2",
    borderRadius: 1,
    padding: "5px",
  },
  iconButton: {
    backgroundColor: "#E6E6E6",
    borderRadius: "50%",
    minWidth: 50,
  },
  moreIconButton: {
    display: {
      xs: "flex",
      md: "none",
    },
  },
};
