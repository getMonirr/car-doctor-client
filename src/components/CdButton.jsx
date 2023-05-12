import PropTypes from "prop-types";

const CdButton = ({ children, className, handleClick, _id }) => {
  return (
    <button
      onClick={() => handleClick(_id)}
      className={`${className} btn btn-outline border-cd-primary text-cd-primary hover:bg-cd-primary hover:border-cd-primary`}
    >
      {children}
    </button>
  );
};

CdButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  _id: PropTypes.string,
};

export default CdButton;
