import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const rest = bookings.filter((book) => book._id !== id);
              setBookings(rest);

              Swal.fire("Deleted!", "Your Order Deleted", "success");
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
              });
            }
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
      }
    });
  };

  const handleUpdate = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const rest = bookings.filter((book) => book._id !== id);
          const updated = bookings.find((book) => book._id === id);
          updated.status = "confirm";
          setBookings([updated, ...rest]);
          Swal.fire(
            "Ordered Confirmed",
            "Check your Confirmed list",
            "success"
          );
        }
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
  };

  return (
    <div className="overflow-x-auto w-full my-28">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Delete</th>
            <th>Image</th>
            <th>Email</th>
            <th>Price</th>
            <th>date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((book) => (
            <BookingsRow
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              key={book._id}
              book={book}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
