import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Banner from '@/components/Banner';

const Help = () => {
  const faqs = [
    { question: "How do I get started with SaaSify?", answer: "To get started, simply sign up for an account on our website and follow the onboarding process. We'll guide you through setting up your first project." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
    { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial on all our plans. No credit card is required to start your trial." },
    { question: "How can I upgrade or downgrade my plan?", answer: "You can easily upgrade or downgrade your plan from your account settings. Changes will be reflected in your next billing cycle." },
    { question: "What kind of customer support do you offer?", answer: "We offer 24/7 email support for all customers. Our Pro and Enterprise plans also include priority phone support." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Banner />
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-gray-600 mb-8">Find answers to common questions and get support</p>
      </header>

      <section className="container mx-auto px-4 py-16">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Need More Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">If you couldn't find the answer you were looking for, our support team is here to help.</p>
            <Button>Contact Support</Button>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "User Guide", description: "Comprehensive documentation on how to use SaaSify" },
            { title: "Video Tutorials", description: "Step-by-step video guides for common tasks" },
            { title: "API Documentation", description: "Detailed information for developers integrating with our API" }
          ].map((resource, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SaaSify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Help;