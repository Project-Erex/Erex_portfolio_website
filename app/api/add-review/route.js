import reviewModel from "@/models/reviewModel";
import DbConnect from "@/utils/DbConneect";

async function POST(request) {
  const {client, review, rating} = await request.json();
  console.log("ress=>>", client, review, rating);

  if (!client || !review || !rating)
    return new Response(JSON.stringify({error: "Review is required"}));

  await DbConnect();
  try {
    const newReview = await reviewModel.create({client, review, rating});
    return new Response(JSON.stringify({review: newReview}));
  } catch (error) {
    return new Response(JSON.stringify({error: error.message}));
  }
}

module.exports = {POST};
