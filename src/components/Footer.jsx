export const Footer = (props) => {
  return (
    <div>
      <p>
        Copyright ©{props.years} {props.name} {props.id}
      </p>
    </div>
  );
};
