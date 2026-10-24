type User = {
    name: string,
    age: number,
}

type Role = {
    role: 'admin' | 'user',
}

type UserWithRole = User & Role;

const user: UserWithRole = {
    name: "Mr. X",
    age: 30,
    role: "admin",
}

interface IUser {
    name: string,
    age: number,

}

interface IUserWithRole extends IUser {
    role: 'admin' | 'user',
}

// const user1: IUserWithRole = {
//     name: "Mr. X",
//     age: 30,
//     role: "admin",
// }

type isBoolean = boolean;
const isAdmin: isBoolean = true;
const isStudent: isBoolean = false;

// type Friends = string[];

// const friends: Friends = ["MIM", "Fahim", "Mariaon", "Rifat", "Ashik"];

interface IFriends {
    [index: number]: string;
}

// const friendsI: IFriends = ["MIM", "Fahim", "Mariaon", "Rifat", "Ashik"];

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => {
    return num1 + num2;
}

// console.log(add(5, 10));

let anything: any;

anything = 5;
anything = "Hello";
anything = true;
anything = false;

// console.log(anything);
// (anything as number)

// type gurd
const calculateDeliveryFee = (distance: string | number | null) => {
    if (typeof distance === "number") {
        return distance * 20;
    } else if (typeof distance === "string") {
        const [value] = distance.split(" ");
        return Number(value) * 20;
    }
}

// const result = calculateDeliveryFee(5);
// const result2 = calculateDeliveryFee('5km');
// const result3 = calculateDeliveryFee(null);


// const friends: string[] = ["MIM", "Fahim", "Mariaon", "Rifat", "Ashik"];
// const rollNumber: number[] = [1, 2, 3, 4, 5];
// const isEligible: boolean[] = [true, false, true, false, true];

// generic > generalize

// type Freinds = Array<string>;
// type RollNumber = Array<number>;
// type Eligible = Array<boolean>;
// const friends: Freinds = ["MIM", "Fahim", "Mariaon", "Rifat", "Ashik"];
// const rollNumber: RollNumber = [1, 2, 3, 4, 5];
// const isEligible: Eligible = [true, false, true, false, true];

// const friends: Array<string> = ["MIM", "Fahim", "Mariaon", "Rifat", "Ashik"];
// const rollNumber: Array<number> = [1, 2, 3, 4, 5];
// const isEligible: Array<boolean> = [true, false, true, false, true];

type GneArray<T> = Array<T>;

const friends: GneArray<string> = ["MIM", "Fahim", "Mariaon", "Rifat", "Ashik"];
const rollNumber: GneArray<number> = [1, 2, 3, 4, 5];
const isEligible: GneArray<boolean> = [true, false, true, false, true];

type NCoordinates<X, Y> = [X, Y];

const coordinates: NCoordinates<number, number> = [40.7128, 74.0060];
const coordinates2: NCoordinates<string, string> = ["40.7128", "74.0060"];

// constraint : id, name



const addCustomerToOrder = <T extends { id: number, name: string }>(customerInfo: T) => {
    return {
        orderStatus: "pending",
        ...customerInfo
    }
}

type CommonCustomerInfo = {
    id: number,
    name: string,
    hasCoupon: boolean,
    // moneyBag?: number,
}

const result = addCustomerToOrder<CommonCustomerInfo>({
    id: 435,
    name: "Ashik",
    hasCoupon: true,
});

const result2 = addCustomerToOrder<CommonCustomerInfo & { moneyBag: number }>({
    id: 565,
    name: "Tariq",
    hasCoupon: false,
    moneyBag: 20000,
});

const result3 = addCustomerToOrder<{ id: number, name: string, emni: string }>({
    id: 565,
    name: "Tariq",
    emni: "emni",
});
// console.log(result);

type FoodMenu = {
    burger: string,
    pizza: string,
    fuchka: string,
};

const myfavFood: keyof FoodMenu = 'burger';

const product = {
    brand: 'Toyota',
    movelYear: 2022,
}

type UserWithRole2 = {
    name: string,
    age: number,
    role: string,
}

type x = keyof UserWithRole2; // 'name' | 'age' | 'role'


const user1: IUserWithRole = {
    name: "Mr. X",
    age: 30,
    role: "admin",
}
// const myName = user1['name'];

const getPropertyfromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
};
const res = getPropertyfromObj(user1, 'name');
console.log(res);