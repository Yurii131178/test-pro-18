 function add(a, b, c) {
    return (a * b) + c;
} 

export default add;

const makeMessage = username => {
	return `Welcome, ${username}!`;
};



// export const makeMessage1 = username => {
// 	return `Hello, ${username}!`;
// };

// export const levels = ["easy", "medium", "hard"];

//кожного разу писати на початку експорт - це не КРАСІВO )))

// краще просто обєднати всі експорти і написати export { makeMessage, levels};

 const makeMessage1 = username => {
	return `Hello, ${username}!`;
};
const levels = ["easy", "medium", "hard"];

export { makeMessage1, levels, userName };

// Перейменування import { name as newName } from '...'

const userName = "Hoolala";

export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";