import { NextResponse } from "next/server";
import movies from "https://maylangomes.github.io/cinema-test/public/data/movies.json";
export async function GET(request: Request) {
  return NextResponse.json(movies);
}