import clsx from "clsx";
import React from "react";

export const Input = ({placeholder, size, classname, variants}) => {
    return <input className={clsx ("rounded border border-[2px] bg-bodyColor", classname,{
        "border-violet-400 outline-violet-500":variants === "primary",
        "border-rose-400 outline-rose-500":variants === "secondary",
        "p-[10px]":size === "sm",
        "p-[15px] w-full":size === "lg",
    })} type="text" placeholder={placeholder} />
}