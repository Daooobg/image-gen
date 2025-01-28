import { createUser } from "@/actions/auth";
import Form from "@/components/Form";
import InputContainer from "@/components/InputContainer";
import Label from "@/components/Label";

export default function Home() {
    return (
        <>
            <Form action={createUser} className="max-w-[25rem] mx-auto text-stone-900">
                <InputContainer>
                    <Label htmlFor="email">Email</Label>
                    <input type="email" id="email" name="email" />
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="password" className="text-stone-50 font-bold mb-1 text-left text-xs uppercase">
                        Password
                    </Label>
                    <input type="password" id="password" name="password" />
                </InputContainer>
                <p className="mt-7">
                    <button
                        type="submit"
                        className="bg-sky-400 w-full text-black px-1 py-3 rounded-lg hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-stone-400"
                    >
                        Submit
                    </button>
                </p>
            </Form>
        </>
    );
}
