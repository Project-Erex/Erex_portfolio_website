import React, { useState } from 'react'
import Rating from "../../components/rating/Rating";
export default function ReviewInput({clientName}) {

	const [review,setReview] = useState("")
	const [rating,setRating] = useState("")
  const [selectedRating, setSelectedRating] = useState(null);
  const [laoding, setLoading] = useState(false);
  const [messages, setMessage] = useState(false);

	const handleRatingClick = (index) => {
    setSelectedRating(index + 1);
		setRating(index+1)
  };
	const handleSubmit =async (e)=>{
e.preventDefault()
setLoading(true)
try {
	const res = await fetch("/api/add-review", {
		body: JSON.stringify({client:clientName,review,rating}),
		headers: {"Content-Type": "application/json"},
		method: "POST",
	})
	if (res.error) {
		setLoading(false);
		setMessage("Error! Something went wrong");
		setTimeout(() => {
			setMessage("");
		}, 5000);
		return;
	}
	setLoading(false);
	setMessage("Awesome! Your review submitted successfully!");
	setReview("");
	setSelectedRating(null)
	setTimeout(() => {
		setMessage("");
	}, 5000);
	
} catch (error) {
	setLoading(false);
		setMessage("Error! Something went wrong");
		setTimeout(() => {
			setMessage("");
		}, 5000);

}

	}
	return (
		<div className="flex flex-col items-center justify-center w-full gap-5">
		<h1 className="font-medium text-secondary text-center  text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
			How likely are you to recommend this project creation <br />
			process to a friend or colleague?
		</h1>
		<Rating selectedRating={selectedRating} setSelectedRating={setSelectedRating} onpress={handleRatingClick}/>
		<form className="w-full">
			<textarea
				className="w-full p-3 mt-2 text-sm font-normal border-2 rounded-[10px] focus:outline-none focus:border-2 focus:border-primary text-secondary font-public border-bordercolor bg-background"
				placeholder="Write other feedback"
				rows="6"
				id="BusinessAddress"
				name="BusinessAddress"
				value={review}
				onChange={(e)=>{setReview(e.target.value)}}

				></textarea>

			<div className="flex justify-end w-full gap-4 py-4">
				<button
					type="Cancel"
					className="relative flex h-[44px] w-32 items-center justify-center overflow-hidden text-secondary transition-all rounded-[10px] bg-[#F0F2F5]  ">
					<span className="relative z-10 font-federo  font-medium text-[16px]">
						Cancel
					</span>
				</button>
				<button
					type="submit"
					value="Send"
					disabled={!review || laoding}
					onClick={handleSubmit}
					className="relative flex h-[44px] w-32 items-center justify-center overflow-hidden  rounded-[10px] text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full bg-primary  before:bg-bghover before:duration-500 before:ease-out hover:shadow-bghover hover:before:h-56 hover:before:w-56">
				{
					laoding ? (
						<span className="relative z-10 font-federo text-[16px] animate-pulse">Loading ... 
					</span>
					):(
						<span className="relative z-10 font-federo text-[16px]">
					Submit Review
					</span>
					)
				}

				</button>
		
			</div>
		</form>
		{messages &&(
			<span className="relative z-10 font-federo text-[16px] text-gray-900">{messages}</span>
		)}
	</div>
	)
}
