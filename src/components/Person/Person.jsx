export const Person = ({ person }) => {
  const marriedMan = person.isMarried && person.sex === 'm';
  const marriedWoman = person.isMarried && person.sex === 'f';
  <div className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    {marriedMan && (
      <p className="Person__partner">{person.partnerName} is my wife</p>
    )}
    {marriedWoman && (
      <p className="Person__partner">{person.partnerName} is my husband</p>
    )}
    {!person.isMarried && <p className="Person__partner"> I am not married </p>}
  </div>;
};
