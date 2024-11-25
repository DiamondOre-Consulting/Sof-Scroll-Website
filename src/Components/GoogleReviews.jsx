import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = "AIzaSyCblhQ_AzSFwFEzsr0cbqQ2FqbKM9zlGQM";
      const placeId = "ChIJ8cJXiQbvDDkRf3WHSGYJI-c";
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

      try {
        const response = await axios.get(url);

        if (response.data && response.data.result && response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        } else {
          setError("No reviews available or unexpected response structure.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to fetch reviews. Please check your API key and Place ID.");
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
     {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4090536494396!2d77.37796560885643!3d28.61749998466572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef068957c2f1%3A0xe72309664887757f!2sDiamond%20Ore%20Consulting%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1732352844887!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <div className="reviews-section">
        <h2>What Our Customers Are Saying</h2>
        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p>Rating: {review.rating} ⭐</p>
              <p>"{review.text}"</p>
              <p>
                <strong>- {review.author_name}</strong>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default GoogleReviews;
