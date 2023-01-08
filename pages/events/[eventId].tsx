import { useRouter } from "next/router";
import EventContent from "../../components/events/event-detail/event-content";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventSummary from "../../components/events/event-detail/event-summary";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import { getEventById } from "../../dummy-data";
import { MESSAGES } from "../../utils/constants";

function EventDetailsPage() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <>
                <ErrorAlert>
                    <p>{MESSAGES.NO_EVENTS_FOUND}</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>{MESSAGES.SHOW_ALL_EVENTS}</Button>
                </div>
            </>
        );
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
}

export default EventDetailsPage;
