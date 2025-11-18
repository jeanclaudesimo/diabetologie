// Google Places API Integration für Reviews

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

export interface GooglePlacesResponse {
  result: {
    name: string;
    rating: number;
    user_ratings_total: number;
    reviews: GoogleReview[];
  };
}

export async function fetchGoogleReviews(placeId: string, apiKey: string) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}&language=de`;

    const response = await fetch(url);
    const data: GooglePlacesResponse = await response.json();

    if (!data.result?.reviews) {
      return [];
    }

    // Konvertiere Google Reviews in unser Testimonial-Format
    return data.result.reviews.map((review) => ({
      id: `google-${review.time}`,
      name: review.author_name,
      rating: review.rating,
      text: review.text,
      date: new Date(review.time * 1000).toISOString().split('T')[0],
      verified: true,
      source: 'google' as const
    }));
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
}

// Funktion zum Finden der Place ID (falls noch nicht bekannt)
export async function findPlaceId(
  query: string,
  apiKey: string
): Promise<string | null> {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
      query
    )}&inputtype=textquery&fields=place_id&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.candidates?.[0]?.place_id || null;
  } catch (error) {
    console.error('Error finding place ID:', error);
    return null;
  }
}
