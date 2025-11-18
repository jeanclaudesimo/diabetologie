import { NextResponse } from 'next/server';
import { fetchGoogleReviews, findPlaceId } from '@/lib/google-reviews';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId');
  const query = searchParams.get('query');

  // API Key sollte aus Environment Variable kommen
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || 'AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8';

  try {
    let actualPlaceId = placeId;

    // Wenn keine Place ID gegeben, suche danach
    if (!actualPlaceId && query) {
      actualPlaceId = await findPlaceId(query, apiKey);
    }

    if (!actualPlaceId) {
      return NextResponse.json(
        { error: 'Place ID oder Query erforderlich' },
        { status: 400 }
      );
    }

    const reviews = await fetchGoogleReviews(actualPlaceId, apiKey);

    return NextResponse.json({
      success: true,
      reviews,
      count: reviews.length
    });
  } catch (error) {
    console.error('Error in Google Reviews API:', error);
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Reviews' },
      { status: 500 }
    );
  }
}
