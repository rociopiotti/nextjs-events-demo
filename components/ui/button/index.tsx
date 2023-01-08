import Link from "next/link";
import classes from "./button.module.css";
import { ButtonProps } from "./button.types";

export default function Button({ link, children, onClick }: ButtonProps) {
    return link ? (
        <Link href={link} className={classes.btn}>
            {children}
        </Link>
    ) : (
        <button onClick={onClick} className={classes.btn}>
            {children}
        </button>
    );
}
