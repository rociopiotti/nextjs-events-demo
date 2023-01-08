import { FormEvent, useRef } from "react";
import Button from "../../ui/button";
import { SELECT_MONTHS, SELECT_YEAR } from "./events-search.constants";
import classes from "./events-search.module.css";
import { EventsSearchProps } from "./events-search.types";

export default function EventsSearch({ onSearch }: EventsSearchProps) {
    const yearInput = useRef<HTMLSelectElement>(null);
    const monthInput = useRef<HTMLSelectElement>(null);
    function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const selectedYear = yearInput?.current?.value;
        const selectedMonth = monthInput?.current?.value;
        onSearch(selectedYear, selectedMonth);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor={SELECT_YEAR.id}>{SELECT_YEAR.label}</label>
                    <select id={SELECT_YEAR.id} ref={yearInput}>
                        {SELECT_YEAR.options.map(({ id, label, value }) => (
                            <option key={id} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor={SELECT_MONTHS.id}>
                        {SELECT_MONTHS.label}
                    </label>
                    <select id={SELECT_MONTHS.id} ref={monthInput}>
                        {SELECT_MONTHS.options.map(({ id, label, value }) => (
                            <option key={id} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <Button>Find events</Button>
        </form>
    );
}
