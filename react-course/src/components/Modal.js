function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onClose}>Cancel</button>
      <button className="btn" onClick={props.onConfirm}>Confirm</button>
    </div>
  );
}

export default Modal;
