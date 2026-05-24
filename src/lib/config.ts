import Cookies from "universal-cookie";

export const serverApi: string = `${import.meta.env.VITE_API_URL}/api`;

export function formatEnum(str?: string): string {
  if (!str) return "";
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getImageUrl(img: string): string {
  return img
    ? `${import.meta.env.VITE_API_URL}/${img}`
    : "/icons/default-user.svg";
}

export function getHeaders() {
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  console.log("token:", token);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export enum AppErrors {
  LOGIN_REQUIRED = "Please login first!",
  IMG_FORMAT = "Only Images with jpg, jpeg, png, webp format allowed!",
  INPUT_ERR = "Please fulfill all inputs!",
  ACCESS_DENIED = "You do not have permission to access this page!",
}

export const validateDataHandler = (data: any): boolean => {
  return Object.keys(data).every((key) => {
    const value = data[key];
    return (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      value !== "select"
    );
  });
};
