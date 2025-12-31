import React, { useEffect, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import OtpCollection from '@/custom/OtpCollection';
import { LeftGradiantPannel, MobileHeader } from './LeftGradiantPannel';
import { Button } from "@/components/ui/button";
import { InputField, StepCard } from '@/custom/Fields';
import { FaWhatsapp } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { TypographyMuted } from '@/custom/Typography';
import { Switch } from "@/components/ui/switch";
import { Navigate } from 'react-router-dom';
import { userData } from '@/machine/userData';

const featureList = [
    "Hand-picked offers from 30+ lenders",
    "Money in mins via Pre-Approved loans",
    "Instant sanction and disbursal",
    "Contact-less processes"
];

const creditScoreFeatures = [
    {
        icon: <IoCheckmark size={18} className="text-green-600" />,
        features: [
            "Get personalised Loan & Card Offers",
            "Detailed Credit Report Insights",
            "Free monthly Updates"
        ]
    }
];

const data = [
    {
        id: 1,
        title: "Track your Credit Health",
        description: "Fill the form just once & monitor your credit score for free without any hassles."
    },
    {
        id: 2,
        title: "Get Deep Insights",
        description: "See what makes your score change & ways to improve your credit health."
    },
    {
        id: 3,
        title: "Make Better Decisions",
        description: "Personalised recommendations based on your credit history to help you save money and spend wisely."
    },
]

export default function CheckProceed() {
    const [step, setStep] = useState(0);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        email: '',
        phone: '',
        checked: false,
        whatAppNotification: false,
        dob: '',
        pinCode: '',
        pan: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (field, value) => {
        if (field === "dob") {
            let cleaned = value.replace(/\D/g, '').slice(0, 8);
            if (cleaned.length >= 5) {
                value = `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(4)}`;
            } else if (cleaned.length >= 3) {
                value = `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
            } else {
                value = cleaned;
            }
        }

        if (field === "pinCode") value = value.replace(/\D/g, '').slice(0, 6);
        if (field === "pan") value = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
        if (field === "phone") value = value.replace(/\D/g, '').slice(0, 10);

        setFormData((prev) => ({ ...prev, [field]: value }));
        setFormErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validateStep = () => {
        const errors = {};
        if (step === 1) {
            if (!formData.gender) errors.gender = 'Gender is required';
            if (!formData.name.trim()) errors.name = 'Full name is required';
            if (!formData.email.trim()) {
                errors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                errors.email = 'Invalid email format';
            }
            if (!/^\d{10}$/.test(formData.phone)) {
                errors.phone = 'Enter a valid 10-digit number';
            }
            if (!formData.checked) errors.checked = 'You must accept the terms';
        } else if (step === 2) {
            if (!/^\d{2}-\d{2}-\d{4}$/.test(formData.dob)) {
                errors.dob = 'DOB must be in DD-MM-YYYY format';
            }
            if (!/^\d{6}$/.test(formData.pinCode)) {
                errors.pinCode = 'Pin Code must be 6 digits';
            }
            if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan)) {
                errors.pan = 'PAN must be like ABCDE1234F';
            }
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateStep();
        if (Object.keys(errors).length === 0) {
            setFormErrors({});
            if (step === 2) {
                try {
                    await userData(formData);
                    setStep(3);
                    setShouldRedirect(true);
                } catch (error) {
                    console.error("Submission failed:", error);
                }
            } else {
                setStep(step + 1);
            }
        } else {
            setFormErrors(errors);
        }
    };

    useEffect(() => {
        const handleOtpVerified = () => {
            const verify = localStorage.getItem("otp_verified");
            if (verify) {
                setStep(1);
            }
        };

        handleOtpVerified();

        window.addEventListener("otp_verified", handleOtpVerified);

        return () => window.removeEventListener("otp_verified", handleOtpVerified);
    }, []);

    if (shouldRedirect) {
        return <Navigate to="/myaccount/dashboard" />;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-screen sm:overflow-y-hidden'>
            <MobileHeader
                mobileHeroheadline="Lifetime Free Credit Score"
                mobileHeroheadlineList={creditScoreFeatures}
                mobileHeroImeges="/assets/credit-score-hero.svg"
            />
            <LeftGradiantPannel
                content={{
                    heading: "Your Credit Health Matters…",
                    description:
                        "Your credit score is more than just a number. A better score can help unlock the things you want most — like a new credit card or the best loan rates in the market.",
                    applyNavigateAbout: "Already downloaded a report?",
                    navigateName: "Click Here",
                    navigateLink: "/sign-in",
                }}
                data={data}
            />

            {step === 0 && (
                <OtpCollection
                    heading="Unlock Best Offers suitable"
                    lendersHighlight="for your needs from 30+ Lenders"
                    features={featureList}
                    termsUrl="/terms"
                    onOtpSuccess={() => {
                        localStorage.setItem("otp_verified", "true");
                        window.dispatchEvent(new Event("otp_verified"));
                    }}
                />
            )}

            <div className='sm:w-lg mx-auto w-full'>
                {step === 1 && (
                    <StepCard title="Lifetime Free Credit Score" onBack={() => setStep(0)}>
                        <form onSubmit={handleSubmit} className='grid gap-3'>
                            <InputField
                                label="Gender"
                                name="gender"
                                type="select"
                                value={formData.gender}
                                onChange={(e) => handleChange('gender', e.target.value)}
                                error={formErrors.gender}
                                options={[
                                    { label: 'Male', value: 'male' },
                                    { label: 'Female', value: 'female' },
                                ]}
                            />
                            <InputField
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                placeholder="As per your bank record"
                                error={formErrors.name}
                            />
                            <InputField
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                placeholder="example@mail.com"
                                error={formErrors.email}
                            />
                            <InputField
                                label="Mobile Number"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                placeholder="10-digit mobile number"
                                error={formErrors.phone}
                            />
                            <div className="flex items-center space-x-2 mt-3">
                                <Checkbox
                                    id="terms"
                                    checked={formData.checked}
                                    onCheckedChange={(value) => handleChange('checked', value)}
                                />
                                <label htmlFor="terms" className="text-sm">Accept terms and conditions</label>
                            </div>
                            {formErrors.checked && (
                                <p className="text-red-500 text-xs mt-1">{formErrors.checked}</p>
                            )}
                            <Button type="submit" className="w-full mt-4">Get Free Credit Report</Button>
                            <div className='flex items-center justify-center gap-2 mt-2'>
                                <FaWhatsapp size={20} className='text-green-600' />
                                <TypographyMuted className="text-xs">Get updates on WhatsApp</TypographyMuted>
                                <Switch
                                    id="whatsapp-mode"
                                    checked={formData.whatAppNotification}
                                    onCheckedChange={(value) => handleChange('whatAppNotification', value)}
                                />
                            </div>
                        </form>
                    </StepCard>
                )}

                {step === 2 && (
                    <StepCard title="We need a few more details" onBack={() => setStep(1)}>
                        <form onSubmit={handleSubmit} className='grid gap-3'>
                            <InputField
                                label="Date of Birth"
                                name="dob"
                                value={formData.dob}
                                onChange={(e) => handleChange('dob', e.target.value)}
                                placeholder="DD-MM-YYYY"
                                error={formErrors.dob}
                            />
                            <InputField
                                label="Pin Code"
                                name="pinCode"
                                value={formData.pinCode}
                                onChange={(e) => handleChange('pinCode', e.target.value)}
                                placeholder="Your current residence area code"
                                error={formErrors.pinCode}
                            />
                            <InputField
                                label="PAN"
                                name="pan"
                                value={formData.pan}
                                onChange={(e) => handleChange('pan', e.target.value)}
                                placeholder="Permanent Account Number"
                                error={formErrors.pan}
                            />
                            <Button type="submit" className="w-full mt-4">Proceed</Button>
                        </form>
                    </StepCard>
                )}
            </div>
        </div>
    );
}
