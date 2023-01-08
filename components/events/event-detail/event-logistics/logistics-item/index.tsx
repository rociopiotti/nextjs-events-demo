import classes from "./logistics-item.module.css";
import { LogisticsItemProps } from "./logistics-item.types";

function LogisticsItem({ icon, children }: LogisticsItemProps) {
    return (
        <li className={classes.item}>
            <span className={classes.icon}>{icon}</span>
            <span className={classes.content}>{children}</span>
        </li>
    );
}

export default LogisticsItem;
