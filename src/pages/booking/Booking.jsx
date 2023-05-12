import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Booking = () => {
  const service = useLoaderData();

  const { user } = useAuth();

  const { price, img, title, service_id, _id } = service;

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const message = form.message.value;

    const bookedService = {
      name,
      date,
      img,
      title,
      price,
      email: user?.email,
      service_id,
      service: _id,
      message,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Booking Added", "Thanks for your Booking", "success");
        }
      })
      .catch((err) => {
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
  };

  return (
    <form
      onSubmit={handleBooking}
      className="space-y-6 max-w-4xl mx-auto p-24 bg-cd-d7 rounded-md my-32"
    >
      <div className="flex gap-6">
        <input
          type="text"
          name="name"
          className="input input-bordered w-full"
          placeholder="Enter your name"
        />
        <input
          type="date"
          name="date"
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex gap-6">
        <input
          type="email"
          name="email"
          className="input input-bordered w-full"
          defaultValue={user?.email}
          readOnly
        />
        <input
          type="text"
          name="price"
          className="input input-bordered w-full"
          defaultValue={"$ " + price}
          readOnly
        />
      </div>
      <div>
        <textarea
          rows={6}
          className="textarea textarea-bordered w-full"
          placeholder="Bio"
          name="message"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-block bg-cd-primary border-cd-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Booking;
