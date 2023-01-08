import classes from "./event-summary.module.css";
import { EventSummaryProp } from "./event-summary.types";

function EventSummary({ title }: EventSummaryProp) {
    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;
