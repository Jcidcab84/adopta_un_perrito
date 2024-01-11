import Button from 'react-bootstrap/Button';





const Tags = (props) => {
  return (
    <>
      <Button variant={props.colorButton}>{props.textButton}</Button>
    </>
  );
};

export default Tags;