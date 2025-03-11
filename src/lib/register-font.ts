import { Font } from "@react-pdf/renderer";

export const registerFont = Font.register({
  family: "Geist",
  fonts: [
    {
      src: "src/assets/font/Geist-Thin.ttf",
      fontWeight: "thin",
    },
    {
      src: "src/assets/font/Geist-Ultralight.ttf",
      fontWeight: "ultralight",
    },
    {
      src: "src/assets/font/Geist-Light.ttf",
      fontWeight: "light",
    },
    {
      src: "src/assets/font/Geist-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "src/assets/font/Geist-Medium.ttf",
      fontWeight: "medium",
    },
    {
      src: "src/assets/font/Geist-SemiBold.ttf",
      fontWeight: "semibold",
    },
    {
      src: "src/assets/font/Geist-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "src/assets/font/Geist-UltraBlack.ttf",
      fontWeight: "ultrabold",
    },
  ],
});
