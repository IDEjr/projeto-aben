import classes from "./PageTitle.module.css";
import { Box } from "@mui/system";

export default function PageTitle(props) {
  return <div className={classes.title}>{props.title}</div>;
}
