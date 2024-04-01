"use client";

import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600">
          Welcome to our about page. This is a placeholder content that you can customize.
        </p>
      </Card>
    </div>
  );
}