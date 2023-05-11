import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card  bg-base-100 shadow-xl border">
      <figure className="px-5 pt-5">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="p-8 space-y-4 items-center">
        <h2 className="card-title"> {title} </h2>
        <div className="card-actions flex justify-between items-center">
          <p className="text-cd-primary font-bold">Price: ${price}</p>
          <Link
            to={`/booking/${_id}`}
            className=" hover:bg-cd-primary p-2 rounded-full hover:text-cd-white transition"
          >
            <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  service: PropTypes.object,
};
