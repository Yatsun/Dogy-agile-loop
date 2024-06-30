export function loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="animate-spin rounded-full border-4 border-primary-foreground border-t-transparent h-12 w-12" />
    </div>
  );
}
