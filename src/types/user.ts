export type Users = {
    id: number;
    name: string;
    age: number;
    personalColor?: string; // ? 를 붙이면 생략 가능
    hobbies?: string[];
};