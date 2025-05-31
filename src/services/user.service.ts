import { addUser, findUserByUsername, updatePassword, findAllUsers } from "../repository/user.repository";
import { IUser } from '../interfaces/user.interface';
import { User }  from '../entity/users.entity';

const signup = async (userData: Omit<IUser, "id">): Promise<User> => {
    return await addUser({ ...userData })
}


const fetchUsers = async (): Promise<User[]> => {
    return await findAllUsers();
};

const login = async (username: string, password: string): Promise<User> => {
    const user = await findUserByUsername(username);
    if (!user) throw new Error("user not found");

    if (user.password !== password) {
        throw new Error("Invalid credentials");
    }


    return user;
}

const changePassword = async (username: string, newPassword: string): Promise<User> => {
    const user = await findUserByUsername(username);
    if (!user) throw new Error("User not found");

    return await updatePassword(username, newPassword);
}


export { login, signup, changePassword, fetchUsers};