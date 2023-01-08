import { useRouter } from "next/router";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(
        year: string | undefined,
        month: string | undefined
    ) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    );
}

export default EventsPage;
