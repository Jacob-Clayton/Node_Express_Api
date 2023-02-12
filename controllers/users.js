import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the username ${user.firstName} added to the database`);
    console.log(`User with the username ${user.firstName} added to the database`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id );

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users= users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database`);
    console.log(`User with the id ${id} deleted from the database`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, location } = req.body;

    const user = users.find((user) => user.id == req.params.id);

    if(firstName) user.firstName = req.body.firstName;
    if(lastName) user.lastName = req.body.lastName;
    if(age) user.age = req.body.age;
    if(location) user.location = req.body.location;

    res.send(`User with the id ${id} has been updated`);
    console.log(`User with the id ${id} has been updated`);
}

