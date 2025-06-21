import React, { useState } from 'react';

const faqs = [
    {
        question: 'Is ToDesktop For Me?',
        answer: 'That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.',
    },
    {
        question: 'Can I try ToDesktop without buying?',
        answer: 'Yes. You can get started by downloading ToDesktop Builder at no cost. After installing it, you can build your desktop application and preview it by clicking the “Run” button. This allows you to test the app on your own computer to ensure it performs to your expectations.',
    },
    {
        question: 'Do you collect or store data about my customers?',
        answer: 'No. When a ToDesktop app opens it contacts the our servers to check if an update is available. We do not collect or store any user data from these requests.',
    },
    {
        question: 'ToDesktop work with sites built with ___?',
        answer: 'Wordpress,Squarespace, Wix, Shopify, React, Vue,PHP,Go'
    },
    {
        question: 'What features are on the product roadmap?',
        answer: 'If you have any suggestions, we’d love to hear! Please send us an email at support@todesktop.com or send us a message',
    },
    {
        question: 'Will my app work offline?',
        answer: 'Think of ToDesktop as a normal browser that is just for your website. Your website will work exactly as it does in Chrome, or any other browser. If you want to make the app work offline you’ll need to make it into a progressive web app. Include a web manifest, service workers and client-side storage and voila — offline support. Learn more on MDN.',
    },
    {
        question: 'I want to use ToDesktop to convert multiple web apps, is there a bulk discount available?',
        answer: 'Yes, let us know your needs. Please send us an email at support@todesktop.com or send us a message',
    },
    {
        question: 'More questions?',
        answer: 'Visit our docs. Or send us a message.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-slate-300"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="flex justify-between items-center w-full text-left "
                        >
                            <span className="font-medium text-lg">{faq.question}</span>
                            <span className="text-xl">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>
                        {openIndex === index && (
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
