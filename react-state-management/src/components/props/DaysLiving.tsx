type DaysLivingProps = {
  currentAge: number;
};

export const DaysLiving = (props: DaysLivingProps) => {
  const daysLived = props.currentAge * 365;

  return (
    <div>
      <p>You have lived for {daysLived} days.</p>
    </div>
  );
};
