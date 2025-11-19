import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-6 px-4 relative border-t border-border flex flex-col items-center mx-auto">
            {" "}
            <a
                href="#hero"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors animate-bounce"
            >
                <ArrowUp size={20} />
            </a>
            <p className="text-sm text-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()} Mason Protsman, LLC. All rights reserved.
            </p>
        </footer>
    );
};