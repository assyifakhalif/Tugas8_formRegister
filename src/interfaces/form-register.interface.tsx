import type { Nationality } from "@/enums";



export interface RegisterFormValues {
    username: string;
    email: string;
    FirsName: string;
    LastName: string;
    Age: number;
    birthDate: string;
    Ismarried: boolean;
    nasionality: Nationality;
    password: string;
    confirmPassword: string;
    }