import CdButton from "../components/CdButton";
import PropTypes from "prop-types";

const BookingsRow = ({ book, handleDelete, handleUpdate }) => {
  const { _id, price, img, date, title, email } = book;

  return (
    <>
      <tr>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-sm hover:bg-cd-primary hover:border-cd-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>{"$ " + price}</td>
        <td>{date}</td>
        <th>
          {book?.status === "confirm" ? (
            <span className="text-cd-primary text-xl">Confirmed</span>
          ) : (
            <CdButton _id={_id} handleClick={handleUpdate}>
              Please Confirmed
            </CdButton>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingsRow;

BookingsRow.propTypes = {
  book: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};
