import { addUser, findUserByUsername, updatePassword } from "../repository/user.repository";
import { IUser } from '../interfaces/user.interface';

const signup = async (userData: Omit<IUser, "id">) => {
    return await addUser({ ...userData })
}


const login = async (username: string, password: string) => {
    const user = await findUserByUsername(username);
    if (!user) throw new Error("user not found");

    if (user.password !== password) {
        throw new Error("Invalid credentials");
    }


    return user;
}

const changePassword = async (username: string, newPassword: string) => {
    const user = await findUserByUsername(username);
    if (!user) throw new Error("User not found");

    return await updatePassword(username, newPassword);
}


export { login, signup, changePassword};