import Services from "../../services/Services";
import SectionDetails from "../../shared/sectionDetails/sectionDetails";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionDetails
        name={"Services"}
        area={"Our Services Area"}
        desc={
          "the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. "
        }
      />
      <Services />
    </div>
  );
};

export default Home;
