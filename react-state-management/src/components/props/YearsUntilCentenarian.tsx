type YearsUntilCentenarianProps = {
  currentAge: number;
};

export const YearsUntilCentenarian = (props: YearsUntilCentenarianProps) => {
  const yearsUntilCentenarian = 100 - props.currentAge;
  return (
    <div>
      {props.currentAge < 100 ? (
        <p>You will become a Centenarian in {yearsUntilCentenarian} years.</p>
      ) : (
        <p>You are already a Centenarian!</p>
      )}
    </div>
  );
};
