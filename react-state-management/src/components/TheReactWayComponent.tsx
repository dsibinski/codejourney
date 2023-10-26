import { useState } from "react";
import Button from "react-bootstrap/Button";

export const TheReactWayComponent = () => {
  const [myCount, setMyCount] = useState(0);

  return (
    <>
      <div>I am a React Way component</div>
      <div>Current count: {myCount}</div>
      <Button
        variant="success"
        onClick={() => {
          setMyCount(myCount + 1);
        }}
      >
        Click me!
      </Button>
    </>
  );
};
