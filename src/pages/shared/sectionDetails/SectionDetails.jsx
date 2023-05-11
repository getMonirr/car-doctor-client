import PropTypes from "prop-types";
const SectionDetails = ({ name, area, desc }) => {
  return (
    <div className="space-y-5 mt-32 mb-8 text-center max-w-md mx-auto">
      <p className="text-cd-primary font-bold text-xl">{name}</p>
      <h3 className="text-5xl font-bold text-cd-d1">{area}</h3>
      <p className="text-base font-normal text-cd-d3">{desc}</p>
    </div>
  );
};

export default SectionDetails;

SectionDetails.propTypes = {
  name: PropTypes.string,
  area: PropTypes.string,
  desc: PropTypes.string,
};
