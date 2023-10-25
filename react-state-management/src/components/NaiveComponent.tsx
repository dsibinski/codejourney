import Button from "react-bootstrap/Button";

export const NaiveComponent = () => {
  let myCount = 0;

  return (
    <>
      <div>I am a naive component</div>
      <div>Current count: {myCount}</div>
      <Button
        variant="success"
        onClick={() => {
          myCount++;
          console.log(myCount);
        }}
      >
        Click me!
      </Button>
    </>
  );
};
