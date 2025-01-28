'use client'
import { generateImageAction } from "@/actions/image";
import Form from "@/components/Form";
import Input from "@/components/Input";
import InputContainer from "@/components/InputContainer";
import Label from "@/components/Label";

import { useActionState } from "react";

export default function ImageGenPage() {
  

    const [state, formAction] = useActionState(generateImageAction, null);

    let url = "";
    if (state && state.image) {
        url = URL.createObjectURL(new Blob([state.image]));
    }

    return (
        <div className="flex gap-4 max-w-[70rem] mx-auto items-start">
            <Form action={formAction} className="flex flex-col w-[25rem] justify-between gap-8 text-stone-900">
                <div className="flex flex-col gap-4">
                    <InputContainer>
                        <Label htmlFor="prompt">Image Prompt</Label>
                        <Input id="prompt" name="prompt" isTextarea></Input>
                    </InputContainer>
                    <div className="flex gap-5">
                        <InputContainer>
                            <Label htmlFor="quality">Quality</Label>
                            <Input
                                id="quality"
                                name="quality"
                                type="number"
                                min="1"
                                max="100"
                                step="1.0"
                                defaultValue="80"
                                className="w-[4rem]"
                            ></Input>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor="aspectRatio">Aspect Ratio</Label>
                            <select
                                id="aspectRatio"
                                name="aspectRatio"
                                defaultValue="1:1"
                                className="p-[0.2rem] rounded-sm w-[6rem]"
                            >
                                <option value="1:1">1:1</option>
                                <option value="4:3">4:3</option>
                                <option value="16:9">16:9</option>
                            </select>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor="format">Aspect Ratio</Label>
                            <select
                                id="format"
                                name="format"
                                defaultValue="png"
                                className="p-[0.2rem] rounded-sm w-[6rem]"
                            >
                                <option value="webp">WebP</option>
                                <option value="png">PNG</option>
                                <option value="jpg">JPG</option>
                            </select>
                        </InputContainer>
                    </div>
                </div>
                <p className="flex justify-end">
                    <button className="bg-sky-400 text-black px-1 py-3 rounded-lg hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-stone-400">
                        Generate Image
                    </button>
                </p>
            </Form>
            <div className="h-[25rem] flex-1 flex justify-center items-center">
                {!state && (
                    <p className="text-stone-400 p-8 font-mono">
                        {`Press "Generate" to create an image based on the prompt.`}
                    </p>
                )}
                {state && state.error && <p className="text-red-200">{state.error}</p>}
                {state && !state.error && (
                    <img src={url} alt={state.prompt} className="h-[25rem] shadow-2xl rounded-md" />
                )}
            </div>
        </div>
    );
}
