import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Building2 } from "lucide-react";
import { SiGoogle } from "react-icons/si";

interface JobCardProps {
  companyName: string;
  jobTitle: string;
  location: string;
  salary: string;
  workType: string;
  isSelected?: boolean;
  logoType: 'google' | 'deloitte' | 'wayspire';
}

export default function JobCard({
  companyName,
  jobTitle,
  location,
  salary,
  workType,
  isSelected = false,
  logoType
}: JobCardProps) {
  const Logo = () => {
    switch (logoType) {
      case 'google':
        return <SiGoogle className="w-6 h-6 text-blue-500" />;
      case 'deloitte':
        return <Building2 className="w-6 h-6 text-green-600" />;
      default:
        return <Building2 className="w-6 h-6 text-gray-600" />;
    }
  };

  return (
    <Card className={`transition-all hover:shadow-lg ${isSelected ? 'border-blue-500 border-2' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-50 rounded-lg">
            <Logo />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">{jobTitle}</h3>
            <p className="text-sm text-gray-600 mb-4">{companyName}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <p className="text-sm text-gray-600">
                {salary}
              </p>
              <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded">
                {workType}
              </span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">View details</Button>
              <Button size="sm">Apply now</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}