import EventItem from "./event-item";
import classes from "./event-list.module.css";
import { EventData, EventListProps } from "./event-list.types";

function EventList({ items }: EventListProps) {
    return (
        <ul className={classes.list}>
            {items.map((event: EventData) => (
                <EventItem key={event.id} data={event} />
            ))}
        </ul>
    );
}

export default EventList;
