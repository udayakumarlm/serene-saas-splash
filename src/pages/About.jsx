import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">About SaaSify</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering Businesses with Innovative Solutions</p>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                At SaaSify, our mission is to revolutionize the way businesses operate by providing cutting-edge SaaS solutions that streamline workflows, boost productivity, and drive growth. We're committed to empowering organizations of all sizes with the tools they need to thrive in the digital age.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Founded in 2020, SaaSify was born out of a passion for technology and a desire to solve complex business challenges. Our team of dedicated professionals brings together years of experience in software development, cloud computing, and business operations to create innovative solutions that make a real difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovation", description: "We constantly push the boundaries of what's possible in SaaS." },
            { title: "Customer-Centric", description: "Our customers' success is at the heart of everything we do." },
            { title: "Integrity", description: "We believe in transparency, honesty, and ethical business practices." }
          ].map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Jane Doe", role: "CEO & Founder" },
            { name: "John Smith", role: "CTO" },
            { name: "Alice Johnson", role: "Head of Customer Success" }
          ].map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.role}</p>
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

export default About;