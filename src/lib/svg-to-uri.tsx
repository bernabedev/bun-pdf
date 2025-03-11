import sharp from "sharp";

export const svgToDataUri = async (svgString: string): Promise<string> => {
  try {
    // Convert SVG string to PNG buffer using sharp
    const pngBuffer = await sharp(Buffer.from(svgString)).png().toBuffer();

    // Convert buffer to base64 data URI
    const dataUri = `data:image/png;base64,${pngBuffer.toString("base64")}`;
    return dataUri;
  } catch (error) {
    console.error("Error occurred:", error);
    return "";
  }
};
