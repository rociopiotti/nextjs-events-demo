import classes from "./error-alert.module.css";
import { ErrorAlertProps } from "./error-alert.types";

function ErrorAlert({ children }: ErrorAlertProps) {
    return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
