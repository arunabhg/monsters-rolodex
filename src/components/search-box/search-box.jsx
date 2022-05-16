import React from "react";

import "./search-box.styles.css";
/**
 * Generic search box component
 * @props:  {className={className},
 * placeholder={.placeholder},
 * onChange={onChangeHandler}}
 *
 */
const SearchBox = ({ className, placeholder, onChangeHandler }) => {
	return (
		<div>
			<input
				className={`search-box ${className}`}
				type="search"
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default SearchBox;
