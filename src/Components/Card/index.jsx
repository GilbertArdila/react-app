const Card = (data) => {
  return (
    <div>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-1 left-0 p-1 bg-blue-950 rounded-lg text-white border-2 text-xs">
          {data.text}
        </span>
        <img
          className="w-4/5 h-full object-cover rounded-sm "
          src={data.url}
          alt={data.text}
        />
      </figure>
    </div>
  );
};

export default Card;
