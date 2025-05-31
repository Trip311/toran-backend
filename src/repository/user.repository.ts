import { dbConnection } from "../config/db.config";
import { User } from "../entity/users.entity";

export const userRepository = dbConnection.getRepository(User);

const findAllUsers = async (): Promise<User[]> => {
    return await userRepository.find();
}


const addUser = async (userData: Omit<User, "id">): Promise<User> => {
    const existing = await userRepository.findOneBy( { username: userData.username });
    if (existing) throw new Error("Username aleardy exists");

    const user = userRepository.create(userData);
    return await userRepository.save(user);
}

const findUserByUsername = async (username: string): Promise<User> => {
    return await userRepository.findOneBy({ username });
}

const updatePassword = async (username: string, newPassword: string): Promise<User> => {
    const user = await findUserByUsername(username);
    if (!user) throw new Error("User not found");
    console.log('Fetched user: ', user.username);

    user.password = newPassword;
    return await userRepository.save(user);
}

export {addUser, findUserByUsername, updatePassword, findAllUsers};