import { NextResponse } from 'next/server';
import { practiceInfo } from '@/data/practice-info';

export async function GET() {
  return NextResponse.json(practiceInfo);
}
