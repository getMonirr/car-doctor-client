import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import Swal from "sweetalert2";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.log(err.message);
        if (err?.message) {
          if (err?.message === "Failed to fetch") {
            Swal.fire(
              "The Internet?",
              "That thing is still around?",
              "question"
            );
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Something went wrong! ${err?.message}`,
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }
        }
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
      {services.map((service) => (
        <ServicesCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
