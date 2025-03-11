import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import React from "react";

interface UserTypeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function UserTypeCard({ title, description, imageUrl }: UserTypeCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-[4/3] relative">
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}