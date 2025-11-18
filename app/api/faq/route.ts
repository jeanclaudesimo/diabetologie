import { NextResponse } from 'next/server';
import { faqs } from '@/data/faq';

export async function GET() {
  return NextResponse.json(faqs);
}
