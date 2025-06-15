"use client";
import { useEffect, useState } from "react";

const SafeHtml = ({ html }: { html: string }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="text-body-color dark:text-body-color-dark line-clamp-3 text-base font-medium dark:border-white/10"
            style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default SafeHtml;
