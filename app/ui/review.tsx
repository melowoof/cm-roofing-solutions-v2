type ReviewType = {
  reviewText: string;
  reviewAuthor: string;
};

export default function Review({ reviewText, reviewAuthor }: ReviewType) {
  return (
    <div className="lg:min-h-20 h-fit lg:max-w-96 bg-white rounded-xl font-sans flex flex-col border-2 border-black p-5 gap-4">
      <div className="">
        <h1 className="font-semibold">{reviewAuthor}</h1>
        <h2 className="text-blue-500">Feedback</h2>
      </div>
      <p className="">{reviewText}</p>
    </div>
  );
}
