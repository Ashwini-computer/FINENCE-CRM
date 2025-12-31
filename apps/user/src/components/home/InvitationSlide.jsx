import React, { useRef } from "react";
import { toPng } from "html-to-image";
import { motion } from "framer-motion";

const InvitationSlide = () => {
    const ref = useRef();

    const handleDownload = () => {
        if (ref.current) {
            toPng(ref.current, {
                cacheBust: true,
                quality: 1.0,
                pixelRatio: 2, // Ensures HD export (2x scale)
                backgroundColor: "#ffffff", // ensures no transparency
            })
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "ganesh-utsav-invitation.png";
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => console.error("Export failed", err));
        }
    };

    return (
        <div className="w-full flex flex-col items-center "
        >
            <section className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#009896] via-yellow-200 to-[#009698] px-4 overflow-hidden pt-24 " ref={ref}>
                <div className="absolute inset-0 bg-black/10 z-0"></div>

                {/* <img src="/assets/sound.png" alt="om sign" className="absolute bottom-0 -left-4 w-64 hidden md:block" /> */}


                {/* Invitation Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-[1400px] pt-10 pb-16 mx-auto flex flex-col gap-12 font-serif"
                >

                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto border-b-2 border-red-600 pb-4 relative">
                        <div className="flex items-center gap-3">
                            <img src="/assets/om.png" alt="om sign" className="w-14 sm:w-18h-14 sm:h-18" />
                            <div>
                                <h3 className="text-red-600 font-bold text-3xl mt-6">
                                    श्री गणेश उत्सव
                                </h3>
                                <p className="text-lg font-semibold mt-2">
                                    आग्रहाचे निमंत्रण..
                                </p>
                            </div>
                            <img src="/assets/om.png" alt="om sign" className="w-14 sm:w-18h-14 sm:h-18" />
                        </div>
                    </div>

                    {/* Event Info */}
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left - Ganesh Image & Date */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <img
                                src="/assets/ganesh-ji.png"
                                alt="गणपती बाप्पा"
                                className="w-full"
                            />
                            <h3 className="text-red-700 font-bold text-3xl mt-6">महाप्रसाद कार्यक्रम उत्साह</h3>
                            <p className="text-gray-800 text-lg mt-2">गुरुवार, <span className="font-semibold">०४/०९/२०२४</span></p>
                            <p className="text-gray-600 mt-2">कार्यक्रमाची सुरुवात: <span className="font-semibold">१०:०० सकाळी</span></p>
                        </div>

                        {/* Right - Details */}
                        <div className="flex flex-col justify-center space-y-6 text-gray-800 text-base leading-relaxed">
                            <p>
                                आपल्या प्रिय गणपती बाप्पा यांच्या चरणी सस्नेह वंदन.
                                या वर्षी उंबरकर टेक्नॉलॉजी प्रा. लि. मध्ये आयोजित <strong>श्री गणेश उत्सव व वेबसाइट उद्घाटन सोहळ्यासाठी</strong> आपणास व आपल्या मान्यवर पाहुण्यांना सप्रेम आमंत्रण.
                                कृपया आपल्या उपस्थितीने आमच्या कार्यक्रमाची शोभा वाढवावी.
                            </p>

                            <p>
                                कार्यक्रमात आपले स्वागत करताना आम्हाला अत्यंत आनंद होत आहे.
                                या शुभ प्रसंगी गणपती बाप्पाच्या कृपेने आयोजित सोहळ्याचे सौंदर्य आणि महत्त्व आपण साक्षीदार व्हावे, ही नम्र विनंती.
                            </p>

                            {/* Location & VIP Request */}
                            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-red-500">
                                <p><strong>स्थळ:</strong> उंबरकर टेक्नॉलॉजी प्रा. लि.,
                                    ऑफिस क्र. ०२, १५, झिरोबॉईज चौक, नेहरू नगर,
                                    पिंपरी-चिंचवड, पुणे, महाराष्ट्र - ४११०१८</p>
                                <p><strong>दिनांक:</strong> ०४/०९/२०२४</p>
                                <p><strong>वेळ:</strong> १०:०० सकाळी</p>
                                <p className="mt-2 text-red-700 font-semibold">आमच्या वेबसाइट उद्घाटनासाठी मान्यवर पाहुण्यांचे विशेष आमंत्रण</p>
                            </div>

                            <p>
                                "॥ॐ श्री गणेशा॥"
                                या शुभ दिनी, श्री गणेश उत्सव निमित्त आम्ही आयोजित महाप्रसाद सोहळ्यासाठी आपण सपरिवार उपस्थित राहावे, ही नम्र विनंती.
                                कार्यक्रमात उपस्थित राहून आमच्या सोहळ्याला आपल्या उपस्थितीने गौरव देण्याची कृपा करावी.
                            </p>

                            <p>
                                कार्यक्रमाची अधिक माहिती किंवा कुठल्याही VIP सादर करण्याच्या सुविधेसाठी कृपया खालील संपर्कावर कळवा:
                                <strong> संपर्क:</strong> +९१ ९२७००३३००२
                            </p>

                            <p>विनम्र, <br />
                                <strong>
                                    उंबरकर टेक्नॉलॉजी प्रा. लि.
                                </strong>
                            </p>
                        </div>
                    </div>
                </motion.div>

            </section >

            {/* Download button */}
            <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
                Download Invitation (HD)
            </button>
        </div>
    );
};

export default InvitationSlide;
