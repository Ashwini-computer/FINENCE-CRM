import { FaPlus, FaMinus } from 'react-icons/fa';
import { TypographyLarge } from '@/custom/Typography';

export const ToggleSection = ({ title, sectionKey, currentOpen, setOpenSection, children, id }) => {
    const isOpen = currentOpen === sectionKey;
    const handleClick = () => {
        setOpenSection(isOpen ? null : sectionKey);
        if (!isOpen) {
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 200;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };
    return (
        <div className="border-t-2 mt-4" id={id}>
            <div
                className="flex justify-between items-center cursor-pointer px-4 p-2 bg-gray-100"
                onClick={handleClick}
            >
                <TypographyLarge className="font-light">{title}</TypographyLarge>
                <span className="text-primary cursor-pointer font-light">
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </span>
            </div>
            <div
                style={{
                    maxHeight: isOpen ? 1000 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)'
                }}
            >
                <div className={isOpen ? "pb-4 opacity-100 transition-opacity duration-200" : "opacity-0 transition-opacity duration-200"}>
                    {children}
                </div>
            </div>
        </div>
    );
};