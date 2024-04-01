import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, PenTool, Target, FileText } from 'lucide-react';

const features = [
  {
    name: 'Cours',
    description: 'Accédez à des cours détaillés et des supports pédagogiques.',
    icon: BookOpen,
    href: '/cours',
  },
  {
    name: 'Exercices',
    description: 'Pratiquez avec des exercices et leurs corrections.',
    icon: PenTool,
    href: '/exercices',
  },
  {
    name: 'Concours',
    description: 'Préparez-vous avec les annales des concours précédents.',
    icon: Target,
    href: '/concours',
  },
  {
    name: 'Résumés',
    description: 'Consultez des fiches de révision concises et efficaces.',
    icon: FileText,
    href: '/resumes',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Bienvenue sur UrPrepa
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Votre plateforme de ressources pour réussir en Classes Préparatoires au Maroc.
                Accédez gratuitement à tous les contenus sans inscription.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/cours">
                  Commencer
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  En savoir plus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="transition-all hover:scale-105">
                <Link href={feature.href}>
                  <CardHeader>
                    <feature.icon className="h-6 w-6 mb-2" />
                    <CardTitle>{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}