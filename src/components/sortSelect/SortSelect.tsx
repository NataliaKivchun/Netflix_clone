import { SelectHTMLAttributes } from "react";
import selectStyle from "./styles.module.css";

const sortTypes = [{optionValue: "popularity.desc", optionText: "Popular first"}, 
  {optionValue: "primary_release_date.desc", optionText: "New first"}, {optionValue: "revenue.desc", optionText: "The most revenue first"}]

export const SortSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
    return (
        <select className={selectStyle.select} {...props}>
            {sortTypes.map(option => <option className={selectStyle.option} value={option.optionValue}>{option.optionText}</option>)}
        </select>
    )
};
