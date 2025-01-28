import Replicate from "replicate";
const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateImage(
    prompt: string,
    options: {
        format?: "png" | "webp" | "jpg";
        aspect_ratio?: "1:1" | "4:3" | "16:9";
        quality?: number;
    }
): Promise<Blob> {
    const input = {
        prompt,
        go_fast: true,
        megapixels: "1",
        num_outputs: 1,
        aspect_ratio: options.aspect_ratio || "1:1",
        output_format: options.format || "webp",
        output_quality: options.quality || 80,
        num_inference_steps: 4,
    };

    const output = (await replicate.run("black-forest-labs/flux-schnell", { input })) as any;

    const imageStream = output[0];
    const imageBlob = await imageStream.blob();

    return imageBlob;
}
