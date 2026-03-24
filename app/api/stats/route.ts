import { NextResponse } from "next/server";
import { projects, skills, experience } from "@/lib/data";

export async function GET() {
  try {
    const totalProjects = projects.length;
    const totalSkills = skills.reduce((acc, group) => acc + group.items.length, 0);
    const yearsOfExperience = new Date().getFullYear() - 2018;
    
    const techStack = skills.flatMap(group => group.items);
    const mostUsedTechs = projects
      .flatMap(p => p.technologies)
      .reduce((acc, tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const topTechnologies = Object.entries(mostUsedTechs)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([tech, count]) => ({ technology: tech, projectCount: count }));

    return NextResponse.json(
      {
        success: true,
        data: {
          overview: {
            totalProjects,
            totalSkills,
            yearsOfExperience,
            totalExperience: experience.length
          },
          topTechnologies,
          techStack: {
            total: techStack.length,
            categories: skills.map(s => ({
              category: s.category,
              count: s.items.length
            }))
          }
        },
        timestamp: new Date().toISOString()
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
      }
    );
  } catch (error) {
    console.error("Stats API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
