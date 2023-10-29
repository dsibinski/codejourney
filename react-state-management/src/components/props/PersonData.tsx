import { useState } from "react";
import { Form } from "react-bootstrap";
import { DaysLiving } from "./DaysLiving";
import { YearsUntilCentenarian } from "./YearsUntilCentenarian";

export const PersonData = () => {
  const minimumAge = 5;
  const maximumAge = 100;
  const [age, setAge] = useState<number>(minimumAge);

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredAge = parseInt(event.target.value);
    if (enteredAge >= minimumAge && enteredAge <= maximumAge) {
      setAge(enteredAge);
    }
  };

  return (
    <>
      <Form>
        <Form.Group controlId="age">
          <Form.Label>Your age</Form.Label>
          <Form.Control
            type="number"
            value={age}
            onChange={handleAgeChange}
            min={minimumAge}
            max={maximumAge}
          />
        </Form.Group>
      </Form>
      <DaysLiving currentAge={age} />
      <YearsUntilCentenarian currentAge={age} />
    </>
  );
};
