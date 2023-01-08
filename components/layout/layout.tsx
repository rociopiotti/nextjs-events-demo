import { LayoutProps } from "./layout.types";
import MainHeader from "./main-header";

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
        </>
    );
}
