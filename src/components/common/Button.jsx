function Button({ Button_Name, class_button }) {
  return (
    <div>
      <button className={class_button}>
        <span>{Button_Name}</span>
      </button>
    </div>
  );
}

export default Button;
