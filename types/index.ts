import { JSX } from "react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  link?: string;
};

export type FooterProps = {
  logoSrc?: string;
  menuItems?: { label: string; href: string }[];
  primaryColor?: string;
  textColor?: string;
  backColor?: string;
  buttonText?: string;
  buttonLink?: string;
  socialLinks?: { facebook?: string; instagram?: string; linkedin?: string };
  contactInfo?: { label: string; icon: JSX.Element }[];
};