interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[];
}

// interface Developer {
//     name: string;
//     age?: number;
//     skills: string[];
// }

const person: Person = {
    name: '홍길동',
    age: 21
};

const expert: Developer = {
    name: '길동',
    skills: ['React', 'JavaScript', 'Java']
};

const people: Person[] = [person, expert];

people.forEach(p => {
    console.log(p);
});
