import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function AdminPlaceholder({ title = "Coming Soon" }) {
  return (
    <div className="p-4 sm:p-6 min-h-full">
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-white text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 text-sm">
            This page will be implemented next.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
