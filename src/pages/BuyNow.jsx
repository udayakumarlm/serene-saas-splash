import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const BuyNow = () => {
  const plans = [
    { name: 'Basic', price: 19, features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Pro', price: 39, features: ['All Basic features', 'Feature 4', 'Feature 5'] },
    { name: 'Enterprise', price: 99, features: ['All Pro features', 'Feature 6', 'Feature 7'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 mb-8">Select the perfect plan for your business needs</p>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">${plan.price}/mo</p>
                <ul className="text-gray-600 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button variant={index === 1 ? "default" : "outline"}>Select Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label>Select Plan</Label>
                  <RadioGroup defaultValue="basic">
                    {plans.map((plan) => (
                      <div key={plan.name} className="flex items-center space-x-2">
                        <RadioGroupItem value={plan.name.toLowerCase()} id={plan.name.toLowerCase()} />
                        <Label htmlFor={plan.name.toLowerCase()}>{plan.name} - ${plan.price}/mo</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full">Complete Purchase</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SaaSify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BuyNow;