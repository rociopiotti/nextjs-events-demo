import React from "react";

export type ButtonProps = {
    link?: string;
    children: React.ReactNode | string;
    onClick?: () => void;
};
