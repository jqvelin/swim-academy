'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useIsHeaderStuck = () => {
    const pathname = usePathname();
    const [isHeaderStuck, setIsHeaderStuck] = useState(false);
    useEffect(() => {
        checkHeaderState()

        window.addEventListener("scroll", checkHeaderState);

        function checkHeaderState() {
            if (window.scrollY >= 30 || pathname !== "/") {
                setIsHeaderStuck(true);
            } else if (window.scrollY < 30) {
                setIsHeaderStuck(false);
            }
        }
    }, []);

    return isHeaderStuck
}