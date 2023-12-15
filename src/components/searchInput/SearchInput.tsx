import { InputHTMLAttributes } from "react";
import searchStyle from "./styles.module.css";

export const SearchInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
          <input className={searchStyle.search} {...props}/>
    )
};
