import { Children } from "react";

export default function Wrapper({children}) {
    return <div className="px-2 max-w-[1400px] mx-auto">
        {children}
    </div>
}