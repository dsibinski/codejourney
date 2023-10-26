import { useState } from "react";
import Button from "react-bootstrap/Button";

type Person = {
  id: number;
  name: string;
  age: number;
};

export const ObjectHolderComponent = () => {
  const johnInitialValue: Person = {
    id: 1,
    name: "John Doe",
    age: 30,
  };

  const [john, setJohn] = useState<Person>(johnInitialValue);

  return (
    <>
      <div>ID: {john.id}</div>
      <div>Name: {john.name}</div>
      <div>Age: {john.age}</div>
      <Button
        variant="success"
        onClick={() => {
          const johnCopy = { ...john };
          johnCopy.age = john.age + 1;
          setJohn(johnCopy);
        }}
      >
        Make John older
      </Button>
    </>
  );
};
