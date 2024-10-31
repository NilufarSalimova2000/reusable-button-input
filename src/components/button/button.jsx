import clsx from "clsx";
import React from "react";

export const Button = ({children, variants, size, type="button", classname}) => {
    return <button className={clsx ("rounded transition duration-400",classname,{
        "bg-fuchsia-300 hover:bg-fuchsia-400 text-textColor" :variants === "primary",
        "bg-emerald-300 hover:bg-emerald-400 text-textColor":variants === "secondary",
        "border border-[2px] border-pink-400 bg-bodyColor text-pink-400 hover:text-pink-500 hover:border-pink-500":variants === "border",
        "py-[10px] px-[15px]":size === "sm",
        "py-[15px] px-[25px]":size === "lg",
    })} type={type}>{children}</button>
}