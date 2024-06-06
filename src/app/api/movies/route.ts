import { NextResponse } from "next/server";
import movies from "/home/runner/work/cinema-test/cinema-test/public/data/movies.json";
export async function GET(request: Request) {
  return NextResponse.json(movies);
}