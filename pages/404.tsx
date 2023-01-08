import Button from "../components/ui/button";
import ErrorAlert from "../components/ui/error-alert/error-alert";
import { MESSAGES } from "../utils/constants";
function NotFoundPage() {
    return (
        <div className='center'>
            <ErrorAlert>
                <p>{MESSAGES.NO_EVENTS_FOUND}</p>
            </ErrorAlert>
            <Button link='/events'>{MESSAGES.NOT_FOUND_PAGE}</Button>
        </div>
    );
}

export default NotFoundPage;
