import *as Yup from "yup";
export const signupSchema = Yup.object({
    firstName: Yup.string().trim().required().min(3).max(10),
    lastName: Yup.string().trim().required().min(3).max(10),
    email: Yup.string().email().required(),
    phone: Yup.string().matches(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/, 'Invalid phone number').required(),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number').required(),
    DateOB: Yup.string().optional(),
    skills: Yup.string().optional(),
    role: Yup.string().optional(),
    address: Yup.string().optional(),
});
export const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number').required()
});