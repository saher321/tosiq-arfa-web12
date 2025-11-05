import { customAlphabet } from "nanoid"

export const generateOTP = () => {
    const generate = customAlphabet('1234567890', 6); // 502387
    const otp = generate();
    return otp
}