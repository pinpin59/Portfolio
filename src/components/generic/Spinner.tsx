import { Spinner } from "@/components/ui/spinner";
export function SpinnerEmpty() {
  return (
    <div className="flex items-center justify-center min-h-screen square-bg">
      <div className="mesh-gradient"></div>
      <Spinner className="w-16 h-16 text-blue-600" />
    </div>
  );
}
