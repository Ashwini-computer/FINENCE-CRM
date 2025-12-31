import { TypographySmall } from '@/custom/Typography';

const ScrollSpyLinks = ({ links, setOpenSection }) => {
    return (
        <>
            <style>{`html { scroll-behavior: smooth; }`}</style>
            <div className="w-fit border border-black bg-gray-100 mt-4 p-3">
                <TypographySmall className="text-blue-950">
                    On this page:
                </TypographySmall>
                <div className="grid gap-3 mt-3">
                    {links?.map((option, index) => (
                        <a
                            key={index}
                            href={option.link}
                            className="text-sm text-blue-800"
                            onClick={(e) => {
                                e.preventDefault();
                                const sectionId = option.link.replace('#', '');
                                if (setOpenSection) setOpenSection(sectionId);
                                const el = document.getElementById(sectionId);
                                if (el) {
                                    const y =
                                        el.getBoundingClientRect().top + window.pageYOffset - 300;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                        >
                            * {option.title}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ScrollSpyLinks;
