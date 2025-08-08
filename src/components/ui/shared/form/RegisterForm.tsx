
import { Nationality } from "@/enums";
import type { RegisterFormValues } from "@/interfaces";
import { Value } from "@radix-ui/react-select";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../../card";
import { Button } from "../../button";
import { lazy } from "react";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { BirthDate } from "./BirthDate";

export const RegisterForm: React.FC = () => {
    const defaultValue: RegisterFormValues = {
        username: '',
        email: '',
        FirsName: '',
        LastName: '',
        Age: 17,
        birthDate: '',
        Ismarried: false,
        nasionality: Nationality.INDONESIA,
        password: '',
        confirmPassword: ''
    };

    const {Field, handleSubmit} = useForm({
        defaultValues: defaultValue,
        onSubmit: async ({value}) =>{
            console.log(value);
            toast(JSON.stringify(value));
        }
    });

    return (
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}
        
    >
        <Card className="w-full max-w-lg p-4 mx-auto ">
            <CardHeader>
                <CardTitle>Register</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
                {/* Username Field */}
                <Field name="username">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">Username </label>
                            <input
                                id={name}
                                name={name}
                                type="text"
                                value={state.value}
                                onChange={(e)=> handleChange(e.target.value)}
                                className="w-full p-2 border rounded "
                                placeholder="Enter your username"

                            />
                        </div>
                    )}
                </Field>
                {/* Email Field */}
                <Field name="email">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">Email </label>
                            <input
                                id={name}
                                name={name}
                                type="email"
                                value={state.value}
                                onChange={(e)=> handleChange(e.target.value)}
                                className="w-full p-2 border rounded "
                                placeholder="Enter your email"
                            />
                        </div>
                    )}
                </Field>
                {/* First Name Field     */}
                {/* <Field name="FirsName">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">First Name </label>
                            <input
                                id={name}
                                name={name}
                                type="text"
                                value={state.value}
                                onChange={(e)=> handleChange(e.target.value)}
                                className="w-full p-2 border rounded "
                                placeholder="Enter your first name"
                            />
                        </div>
                    )}
                </Field> */}
                {/* Last Name Field */}
                {/* <Field name="LastName">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">Last Name </label>
                            <input
                                id={name}
                                name={name}
                                type="text"
                                value={state.value}
                                onChange={(e)=> handleChange(e.target.value)}
                                className="w-full p-2 border rounded "
                                placeholder="Enter your last name"
                            />
                        </div>
                    )}
                </Field> */}
                {/* Age Field */}
                <Field name="Age">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">Age </label>
                            <input
                                id={name}
                                name={name}
                                type="number"
                                value={state.value}
                                onChange={(e)=> handleChange(Number(e.target.value))}
                                className="w-full p-2 border rounded "
                                placeholder="Enter your age"
                            />
                        </div>
                    )}
                </Field>
                {/* Birth Date Field */}
                <Field name="birthDate">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            {/* <BirthDate {...{state, handleChange, name}}/> */}
                            {/* buatkan birthdate */}
                            <label htmlFor={name} className="text-left">Birth Date </label>
                            <BirthDate
                                id={name}
                                value={state.value ? new Date(state.value) : undefined}
                                onChange={(date) => handleChange(date ? date.toISOString() : '')}
                            />
                        </div>
                    )}
                </Field>
                {/* Is Married Field */}
                <Field name="Ismarried">
                    {({state, handleChange, name}) => (
                        <div className="flex items-center gap-2 text-m">
                            <input
                                id={name}
                                name={name}
                                type="checkbox"
                                checked={state.value}
                                onChange={(e)=> handleChange(e.target.checked)}
                                className="w-4 h-4"
                            />
                            <label htmlFor={name} className="text-left">Is Married</label>
                        </div>
                    )}
                </Field>
                {/* Nationality Field */}
                <Field name="nasionality">
                {({ state, handleChange, name }) => (
                    <div className="flex flex-col gap-1 text-m">
                    <label htmlFor={name} className="text-left">Nationality</label>
                    <select
                        id={name}
                        name={name}
                        value={state.value}
                        onChange={(e) => handleChange(e.target.value as Nationality)}
                        className="w-full p-2 border rounded-md"
                    >
                        {Object.values(Nationality).map((nation) => (
                        <option key={nation} value={nation}>
                            {nation}
                        </option>
                        ))}
                    </select>
                    </div>
                )}
                </Field>
                {/* Password Field */}
                <Field name="password">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">Password </label>
                            <input
                                id={name}
                                name={name}
                                type="password"
                                value={state.value}
                                onChange={(e)=> handleChange(e.target.value)}
                                className="w-full p-2 border rounded "
                                placeholder="Enter your password"
                            />
                        </div>
                    )}

                </Field>
                {/* Confirm Password Field */}
                <Field name="confirmPassword">
                    {({state, handleChange, name}) => (
                        <div className="flex flex-col gap-1 text-m">
                            <label htmlFor={name} className="text-left">Confirm Password </label>
                            <input
                                id={name}
                                name={name}
                                type="password"
                                value={state.value}
                                onChange={(e)=> handleChange(e.target.value)}
                                className="w-full p-2 border rounded "
                                placeholder="Confirm your password"
                            />
                        </div>
                    )}
                </Field>
                



            </CardContent>
            <Button type="submit" className="w-full">
            Register
          </Button>
        </Card>
        

    </form>
    );
}


