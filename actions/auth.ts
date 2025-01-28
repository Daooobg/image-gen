"use server";

import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export async function createUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await auth.api.signUpEmail({
        body: {
        email,
        password,
        name: email,
    }});

    // if (error) {
    //     throw new Error(error.message);
    // }

    console.log(result);
    redirect("/image-gen");
}
