import { EventcontentProps } from "./even-content.types";
import classes from "./event-content.module.css";

function EventContent({ children }: EventcontentProps) {
    return <section className={classes.content}>{children}</section>;
}

export default EventContent;
