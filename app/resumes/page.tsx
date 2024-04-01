"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResumesPage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Resumes</CardTitle>
          <CardDescription>View and manage your resumes</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Resume content will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}