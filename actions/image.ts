"use server";
import { generateImage } from "@/lib/image";

export async function generateImageAction(prevState: { image?: Blob} | null, formData: FormData) {

    const prompt = formData.get("prompt") as string;
    const quality = formData.get("quality") as string;
    const aspectRatio = formData.get("aspectRatio") as "1:1" | "4:3" | "16:9";
    const format = formData.get("format") as "jpg" | "png" | "webp";

    const image = await generateImage(prompt, { quality: parseInt(quality), aspect_ratio: aspectRatio, format });
    return { image, result: "success", error: "", prompt: prompt };
}
