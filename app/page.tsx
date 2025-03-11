import { Star } from "lucide-react";
import Header from "@/components/Header";
import UserTypeCard from "@/components/UserTypeCard";
import JobCard from "@/components/Jobcard";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Who's using GradHub Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who is using GradHub?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UserTypeCard
              title="Student"
              description="Access internships, jobs, and opportunities tailored for you."
              imageUrl="/student.jpg"
            />
            <UserTypeCard
              title="Employer"
              description="Connect with top talent offering exciting opportunities."
              imageUrl="/employer.jpg"
            />
            <UserTypeCard
              title="University"
              description="Connect seamlessly with top companies to boost growth."
              imageUrl="/university.jpg"
            />
          </div>
        </section>

        {/* Jobs Section */}
        <section>
          <div className="flex items-center gap-2 mb-12">
            <h2 className="text-3xl font-bold">Find Your Dream Job</h2>
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JobCard
              companyName="Google"
              jobTitle="Technical Support Special."
              location="New Delhi, India"
              salary="20,000 - 25,000 INR"
              workType="HYBRID"
              logoType="google"
              isSelected={true}
            />

            <JobCard
              companyName="Deloitte"
              jobTitle="Risk Analyst"
              location="Gurugram, India"
              salary="8,00,000 per annum (INR)"
              workType="HYBRID"
              logoType="deloitte"
            />

            <JobCard
              companyName="Wayspire"
              jobTitle="Business Development Ass."
              location="Gurugram, India"
              salary="7,00,000 per annum (INR)"
              workType="IN-OFFICE"
              logoType="wayspire"
            />
          </div>
        </section>
      </main>
    </div>
  );
}