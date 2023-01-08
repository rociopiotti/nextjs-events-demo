import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
    const feturedEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={feturedEvents} />
        </div>
    );
}

export default HomePage;
