import reviewModel from "@/models/reviewModel";
import DbConnect from "@/utils/DbConneect";

async function POST(request) {
  const {client, review, rating, project} = await request.json();
  console.log("ress=>>", client, review, rating, project);

  if (!client || !review || !rating || !project)
    return new Response(JSON.stringify({error: "Review is required"}));

  await DbConnect();
  try {
    const newReview = await reviewModel.create({client, review, rating, project});
    return new Response(JSON.stringify({review: newReview}));
  } catch (error) {
    return new Response(JSON.stringify({error: error.message}));
  }
}

module.exports = {POST};
