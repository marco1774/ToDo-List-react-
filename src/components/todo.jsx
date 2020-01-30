import React from "react";

export default function Todo(props) {
  return (
    <li
      className="list-group-item shadow p-3 mb-2 bg-white rounded"
      key={props.Id}
    >
      {props.Id}){" "}
      {props.checked === true ? (
        <p
          style={{
            color: "gray",
            textDecoration: "line-through"
          }}
        >
          {props.testo}
        </p>
      ) : (
        <p>{props.testo}</p>
      )}
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => props.cancellaDallaLista(props.Id)}
      >
        Cancella
      </button>
      <button
        type="button"
        className="btn btn-success float-right mr-2"
        onClick={() => props.fatto(props.Id)}
      >
        Fatto
      </button>
    </li>
  );
}
