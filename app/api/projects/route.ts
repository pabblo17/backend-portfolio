import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/lib/data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tech = searchParams.get("tech");
    const limit = searchParams.get("limit");

    let filteredProjects = [...projects];

    if (tech) {
      filteredProjects = filteredProjects.filter(project =>
        project.technologies.some(t => 
          t.toLowerCase().includes(tech.toLowerCase())
        )
      );
    }

    if (limit) {
      const limitNum = parseInt(limit);
      filteredProjects = filteredProjects.slice(0, limitNum);
    }

    return NextResponse.json(
      {
        success: true,
        count: filteredProjects.length,
        data: filteredProjects
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      }
    );
  } catch (error) {
    console.error("Projects API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
