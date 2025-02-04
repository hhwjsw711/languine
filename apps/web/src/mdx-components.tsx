// @ts-nocheck
import { Link } from "@/i18n/routing";
import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: function H1({ className = "", children, ...props }) {
      return (
        <h1
          className={`scroll-m-20 text-xl tracking-tight mb-6 ${className}`}
          {...props}
        >
          {children}
        </h1>
      );
    },
    h2: function H2({ className = "", children, ...props }) {
      return (
        <h2 className={`tracking-tight text-lg mb-4 ${className}`} {...props}>
          {children}
        </h2>
      );
    },
    h3: function H3({ className = "", children, ...props }) {
      return (
        <h3 className={`tracking-tight text-sm ${className}`} {...props}>
          {children}
        </h3>
      );
    },
    h4: function H4({ className = "", children, ...props }) {
      return (
        <h4 className={`tracking-tight ${className}`} {...props}>
          {children}
        </h4>
      );
    },
    p: function P({ className = "", children, ...props }) {
      return (
        <p
          className={`leading-7 text-secondary text-sm [&:not(:first-child)]:mt-6 mb-6 ${className}`}
          {...props}
        >
          {children}
        </p>
      );
    },
    ul: function UL({ className = "", children, ...props }) {
      return (
        <ul
          className={`my-6 ml-6 mb-6 list-disc text-sm text-secondary [&>li]:mt-2 ${className}`}
          {...props}
        >
          {children}
        </ul>
      );
    },
    ol: function OL({ className = "", children, ...props }) {
      return (
        <ol
          className={`my-6 ml-6 mb-6 list-decimal text-sm text-secondary [&>li]:mt-2 ${className}`}
          {...props}
        >
          {children}
        </ol>
      );
    },
    li: function LI({ className = "", children, ...props }) {
      return (
        <li
          className={`leading-7 text-sm text-secondary ${className}`}
          {...props}
        >
          {children}
        </li>
      );
    },
    blockquote: function Blockquote({ className = "", children, ...props }) {
      return (
        <blockquote
          className={`mt-6 border-l-2 border-gray-300 pl-6 italic text-gray-800 dark:text-gray-200 ${className}`}
          {...props}
        >
          {children}
        </blockquote>
      );
    },
    a: function A({ className = "", children, ...props }) {
      return (
        <Link
          className={`text-primary underline underline-offset-4 hover:text-primary/80 ${className}`}
          {...props}
        >
          {children}
        </Link>
      );
    },
    img: function Img(props) {
      return (
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          {...(props as ImageProps)}
        />
      );
    },
    ...components,
  };
}
