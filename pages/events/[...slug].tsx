import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import { getFilteredEvents } from "../../dummy-data";
import { MESSAGES } from "../../utils/constants";
function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return <p className='center'>{MESSAGES.LOADING}</p>;
    }
    const filteredMonth = filterData[0];
    const filteredYear = filterData[1];
    const numYear = +filteredMonth;
    const numMonth = +filteredYear;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <p>{MESSAGES.INVALID_VALUE}</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>{MESSAGES.SHOW_ALL_EVENTS}</Button>
                </div>
            </>
        );
    }
    const filteredEvents = getFilteredEvents({
        month: numMonth,
        year: numYear,
    });
    const date = new Date(numYear, numMonth - 1);

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <div className='center'>
                <ErrorAlert>
                    <p>{MESSAGES.NO_EVENTS_FOUND}</p>
                </ErrorAlert>
                <Button link='/events'>{MESSAGES.SHOW_ALL_EVENTS}</Button>
            </div>
        );
    }
    return (
        <>
            <ResultsTitle date={date} /> <EventList items={filteredEvents} />
        </>
    );
}

export default FilteredEventsPage;
