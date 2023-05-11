import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import CdButton from "../../../components/CdButton";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item w-full relative">
        <img src={img1} className="w-full object-cover object-center" />
        <div className="h-[600px] w-full bg-gradient-to-r from-cd-d1 to-[rgba(21, 21, 21, 0)] absolute flex justify-start items-center">
          <div className="max-w-lg pl-28">
            <h1 className="text-6xl font-bold text-cd-white leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="py-6 text-cd-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <CdButton className={'bg-cd-primary text-cd-white hover:text-cd-primary hover:bg-cd-white'}>Discover More</CdButton>
            <CdButton className={'ml-5'}>Latest Project</CdButton>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover object-center" />
        <div className="h-[600px] w-full bg-gradient-to-r from-cd-d1 to-[rgba(21, 21, 21, 0)] absolute flex justify-start items-center">
          <div className="max-w-lg pl-28">
            <h1 className="text-6xl font-bold text-cd-white leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="py-6 text-cd-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <CdButton className={'bg-cd-primary text-cd-white hover:text-cd-primary hover:bg-cd-white'}>Discover More</CdButton>
            <CdButton className={'ml-5'}>Latest Project</CdButton>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover object-center" />
        <div className="h-[600px] w-full bg-gradient-to-r from-cd-d1 to-[rgba(21, 21, 21, 0)] absolute flex justify-start items-center">
          <div className="max-w-lg pl-28">
            <h1 className="text-6xl font-bold text-cd-white leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="py-6 text-cd-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <CdButton className={'bg-cd-primary text-cd-white hover:text-cd-primary hover:bg-cd-white'}>Discover More</CdButton>
            <CdButton className={'ml-5'}>Latest Project</CdButton>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover object-center" />
        <div className="h-[600px] w-full bg-gradient-to-r from-cd-d1 to-[rgba(21, 21, 21, 0)] absolute flex justify-start items-center">
          <div className="max-w-lg pl-28">
            <h1 className="text-6xl font-bold text-cd-white leading-tight">
              Affordable Price For Car Servicing
            </h1>
            <p className="py-6 text-cd-white font-normal">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <CdButton className={'bg-cd-primary text-cd-white hover:text-cd-primary hover:bg-cd-white'}>Discover More</CdButton>
            <CdButton className={'ml-5'}>Latest Project</CdButton>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4"> 
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
