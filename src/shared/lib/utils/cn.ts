import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
const testmsg = () => alert("test");

export { cn, testmsg, type ClassValue };
