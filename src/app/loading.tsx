import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <LoaderCircle className="h-16 w-16 animate-spin text-primary" />
      <p className="mt-4 text-lg text-foreground">جاري التحميل...</p>
    </div>
  );
}
