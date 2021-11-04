import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "104px 128px 500px 128px",
    background: "#F7F8FB",
  },

  table: {
    "& .ant-table": {
      border: "1px solid #E5E7EB",
      borderRadius: 8,
      boxShadow:
        " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
    },
    "& .ant-pagination-item-active": {
      borderColor: "#00C1B1",
    },
  },
});

export default styles;
