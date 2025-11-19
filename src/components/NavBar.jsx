import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // scrollY or screenY ?
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className='container flex items-center justify-between'>
                <a className="text-xl font-bold text-primary flex items-center" href='#hero'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Mason Protsman</span>{" "}
                        Software Engineer
                    </span>
                </a>
                <div className='hidden md:flex space-x-8'>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href}
                            className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <button onClick={() => setIsMenuOpen((prev) => !prev)}> {isMenuOpen ? <X size={48}/> : <Menu size={24}
                className='md:hidden text-foreground z-50'
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>} </button>
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

                )}>
                <div className='flex flex-col space-y-8 text-2xl'>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} onClick={() => setIsMenuOpen(false)}
                            className="text-foreground hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                </div>

            </div>

        </nav>
    )
}