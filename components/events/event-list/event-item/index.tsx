import Button from "../../../ui/button";
import AddressIcon from "../../../ui/icons/address-icon";
import ArrowRightIcon from "../../../ui/icons/arrow-right-icon";
import DateIcon from "../../../ui/icons/date-icon";
import { ExploreLink } from "./event-item.constants";
import classes from "./event-item.module.css";
import { EventItemProps } from "./event-item.types";

export default function EventItem({
    data: { title, image, date, location, id },
}: EventItemProps) {
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = location.replace(",", "\n");

    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={"/" + image} alt='Landscape picture' />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />

                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>{ExploreLink}</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}
