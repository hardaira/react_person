import cn from 'classnames';
import './Person.scss';

export const Person = ({ person }) => (
  <div className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p
      className={cn('Person__age', {
        'Person__age--none': person.age === null,
      })}
    >
      I am {person.age}
    </p>
    <p className="Person__partner">
      {person.isMarried
        ? `${person.partnerName} is my
        ${person.sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  </div>
);
