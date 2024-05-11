import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <p>Coded in 
            <a href="https://code.visualstudio.com/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)"> Visual Studio Code </a> 
            , built with 
            <a href="https://nextjs.org/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Next.js (opens in a new tab)"> Next.js </a> 
            and 
            <a href="https://tailwindcss.com/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)"> Tailwind CSS </a>
            , deployed with 
            <a href="https://vercel.com/" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Vercel (opens in a new tab)"> Vercel </a>
            . All text is set in the 
            <a href="https://fonts.google.com/specimen/Hanken+Grotesk" class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener" aria-label="Inter (opens in a new tab)"> Hanken Grotesk </a> 
            typeface.
        </p>
    )
}

export default Footer