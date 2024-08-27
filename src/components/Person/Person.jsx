export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const marriedMan = isMarried && sex === 'm';
  const marriedWoman = isMarried && sex === 'f';

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {marriedMan && (
        <p className="Person__partner">{partnerName} is my wife</p>
      )}
      {marriedWoman && (
        <p className="Person__partner">{partnerName} is my husband</p>
      )}
      {!isMarried && (
        <p className="Person__partner"> I am not married </p>
      )}
    </div>
  );
};
