import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  button: {
    width: "fit-content",
    height: 38,
    borderRadius: 6,
    color: "#fff",
    background: "#00C1B1",
    border: "none",
  },
  inputContainer: {
    background: " #FFFFFF",
    boxShadow:
      "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    borderRadius: 8,
  },
  saveContainer: {
    height: 62,
    background: "#16295A",
    padding: "12px 24px",
    borderRadius: "0px 0px 2px 2px",
  },
});

export default styles;
