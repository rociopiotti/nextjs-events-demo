import { MESSAGES } from "../../utils/constants";
import Button from "../ui/button";
import classes from "./results-title.module.css";
import { ResultsTitleProps } from "./results-title.types";

function ResultsTitle({ date }: ResultsTitleProps) {
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    return (
        <section className={classes.title}>
            <h1>{`${MESSAGES.EVENTS_IN} ${humanReadableDate}`}</h1>
            <Button link='/events'>{MESSAGES.SHOW_ALL_EVENTS}</Button>
        </section>
    );
}

export default ResultsTitle;
