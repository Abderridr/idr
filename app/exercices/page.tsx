import { Dumbbell } from "lucide-react"

export default function ExercicesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Dumbbell className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Exercices</h1>
      </div>
      
      <div className="grid gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p className="text-lg text-muted-foreground">
            Découvrez notre collection d&apos;exercices soigneusement sélectionnés pour vous aider à progresser.
          </p>
        </div>
      </div>
    </main>
  )
}