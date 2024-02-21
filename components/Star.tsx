import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-[13px] text-[orange]" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-[13px] text-[orange]" />
        ) : (
          <AiOutlineStar className="text-[15px] text-[orange]" />
        )}
      </span>
    );
  });

  return (

      <div className="flex">
        {ratingStar}
      </div>
  );
};


export default Star;