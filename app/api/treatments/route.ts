import { NextResponse } from 'next/server';
import { treatments } from '@/data/treatments';

export async function GET() {
  return NextResponse.json(treatments);
}
