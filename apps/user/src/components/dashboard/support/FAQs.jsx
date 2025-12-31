import React, { useState } from 'react';
import {
    HighLighter,
    TypographyPBlueColor,
    TypographySmall
} from '@/custom/Typography';
import { GrNext } from 'react-icons/gr';
import { Link, useSearchParams } from 'react-router-dom';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { LuBadgeHelp } from 'react-icons/lu';
import { AiOutlineMail } from 'react-icons/ai';
import { InputField } from '@/custom/Fields';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
    {
        title: 'Phone',
        value: '+91 95112 48001',
        description: 'Lines are open Mon-Sat from 9:30 am – 7:30 pm',
        icon: <MdOutlineLocalPhone size={24} />,
        href: 'tel:+919511248001'
    },
    {
        title: 'WhatsApp',
        value: '+91 77092 22331',
        description: 'You can even reach out to us via WhatsApp.',
        icon: <FaWhatsapp size={24} />,
        href: 'https://wa.me/917709222331'
    },
    {
        title: 'Visit Us',
        value: '',
        description: 'Office no.02,15, Zeroboyz Chowk, above HDFC Bank, Nehru Nagar, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018',
        icon: <LuBadgeHelp size={24} />,
        href: 'https://www.google.com/maps/search/?api=1&query=HDFC+Bank,+Nehru+Nagar,+Pimpri,+Pune'
    },
    {
        title: 'Email',
        value: 'care@financesbazar.com',
        description: 'Email to us related to your Credit Report',
        icon: <AiOutlineMail size={24} />,
        href: 'mailto:care@financesbazar.com'
    }
];

const productOptions = [
    { label: 'Select Product', value: '' },
    { label: 'Credit Report', value: 'credit-report' },
    { label: 'Personal Loan', value: 'personal-loan' },
    { label: 'Business Loan', value: 'business-loan' },
    { label: 'Credit Card', value: 'credit-card' },
    { label: 'Savings Account', value: 'savings-account' },
    { label: 'Mutual Fund', value: 'mutual-fund' },
    { label: 'Gold Loan', value: 'gold-loan' },
    { label: 'Home Loan', value: 'home-loan' },
    { label: 'Loan Against Property', value: 'loan-against-property' },
    { label: 'Car Loan', value: 'car-loan' },
    { label: 'Education Loan', value: 'education-loan' },
    { label: 'Others', value: 'others' }
];

const tabs = [
    { label: 'FAQs', value: 'faqs' },
    { label: 'Submit A Query', value: 'submit-query' },
    { label: 'Contact Us', value: 'contact-us' }
];

const TabButtons = ({ activeTab, setActiveTab }) => (
    <div className="flex flex-wrap justify-between sm:justify-start sm:gap-16 border-b border-gray-300 px-6 pt-6 bg-white rounded-t-md">
        {tabs.map((tab) => (
            <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`font-medium cursor-pointer text-sm pb-2 transition-all ${activeTab === tab.value
                    ? 'text-blue-800 border-b-2 border-blue-800'
                    : 'text-gray-600 hover:text-blue-700'
                    }`}
            >
                {tab.label}
            </button>
        ))}
    </div>
);

const FAQContent = () => {
    const items = [
        'Credit Score',
        'Business Loan',
        'Credit Card',
        'Savings Account',
        'Home Loan',
        'Loan Against Property',
        'Application Related'
    ];

    return (
        <div className="p-4 sm:p-6">
            <HighLighter leftText=" Frequently Asked Questions" className="text-blue-800 text-xl" />
            <div className="space-y-3 mt-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-b text-sm sm:text-base font-medium text-blue-950 cursor-pointer py-2 hover:text-blue-700"
                    >
                        <TypographySmall>
                            {index + 1}. {item}
                        </TypographySmall>
                        <GrNext size={14} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const SubmitQueryContent = ({ formData, errors, handleChange, handleSubmit }) => (
    <div className="p-4 sm:p-6">
        <HighLighter leftText="You can write to us !" className="text-blue-800 text-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 gap-6 mt-4">
            <InputField
                label="Regard Product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                type="select"
                options={productOptions}
                placeholder="Select Product"
                error={errors.product}
            />
            <InputField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="text"
                placeholder="Your Email"
                error={errors.email}
            />
        </div>
        <div className="grid gap-2 my-6">
            <label className="block text-sm font-medium text-gray-700">Raise Problem</label>
            <Textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="Describe the issue here*"
                className="w-full"
            />
            {errors.issue && <p className="text-red-500 text-sm">{errors.issue}</p>}
        </div>
        <div className="flex justify-end">
            <Button onClick={handleSubmit}>Submit Query</Button>
        </div>
    </div>
);

const ContactUsContent = () => (
    <div className="p-4 sm:p-6">
        <HighLighter leftText="How can we help you?" className="text-blue-800 text-xl" />
        <TypographyPBlueColor className="mt-2">
            It looks like you are experiencing problems with our service. Don’t worry! We’re here to
            help. For any query, you can{' '}
            <Link to="" className="text-blue-800 font-medium">
                write to us
            </Link>{' '}
            and we will get back to you within 24 hours. Alternatively, you can speak to our customer
            care team on the number below, between 09:30 AM to 7:30 PM (Mon-Sat).
        </TypographyPBlueColor>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <span className="text-accent">{item.icon}</span>
                    <div className="grid gap-1">
                        <TypographySmall className="text-sm flex flex-col sm:flex-row sm:items-center gap-1">
                            {item.title}:{' '}
                            <Link to={item.href} className="text-blue-800 break-all">
                                {item.value}
                            </Link>
                        </TypographySmall>
                        <TypographyPBlueColor className="m-0">
                            {item.description}
                        </TypographyPBlueColor>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function FAQs() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'faqs';

    const setActiveTab = (tab) => {
        setSearchParams({ tab });
    };

    const [formData, setFormData] = useState({
        product: '',
        email: '',
        issue: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = () => {
        const newErrors = {};
        if (!formData.product) newErrors.product = 'Product is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.issue) newErrors.issue = 'Issue description is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Submitted Query:', formData);
        setFormData({ product: '', email: '', issue: '' });
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'faqs':
                return <FAQContent />;
            case 'submit-query':
                return (
                    <SubmitQueryContent
                        formData={formData}
                        errors={errors}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                );
            case 'contact-us':
                return <ContactUsContent />;
            default:
                return <FAQContent />;
        }
    };

    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden">
            <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </div>
    );
}
