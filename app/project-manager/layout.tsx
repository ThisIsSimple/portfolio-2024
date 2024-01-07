import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
    return (
        <div className="p-10">
            {children}
        </div>
    )
}