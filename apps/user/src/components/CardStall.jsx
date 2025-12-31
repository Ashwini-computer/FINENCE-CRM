import { Link } from "react-router-dom";
import { TypographyLarge, TypographyH4, TypographyMuted } from "@/custom/Typography";

export default function CardStall({ link, icon, label, value, description }) {
    return (
        <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md shadow-md border p-6 grid gap-3 hover:-translate-y-4 transition-all"
        >
            {icon}
            <div className="w-16 h-px bg-accent"></div>
            <div>
                <TypographyLarge className="uppercase text-sm font-bold tracking-wide text-blue-950">
                    {label}
                </TypographyLarge>
                <TypographyH4 className="font-semibold mt-2 text-blue-950">
                    {value}
                </TypographyH4>
            </div>
            <TypographyMuted className="text-sm font-base leading-6">
                {description}
            </TypographyMuted>
        </Link>
    )
}
