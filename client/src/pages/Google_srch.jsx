import React from 'react'
import SectionTittle from '../components/SectionTittle'
import { FaSearch } from "react-icons/fa";

function Google_srch() {
    const clearInput = () => {
        document.getElementById("search-input").value = "";
    };

    const performSearch = () => {
        const query = document.getElementById("search-input").value;
        window.location.href = `https://www.google.com/search?q=${query}`;
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          performSearch();
        }
      };
    return (
        <div className='blck'>
            <SectionTittle title="Google Search" />

            <div className="flex justify-center items-center my-10 flex-col">
                <p className='text-white mb-2 text-center '>Search Anything on Google <br/> Use this integrated Google search bar to quickly explore anything directly from my portfolio.</p>
                <div className="flex w-full max-w-lg rounded-lg overflow-hidden shadow-lg gap-x-2 ssm:gap-x-1">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Google Search..."
                        className="w-full bg-transparent px-5 py-2 text-text font-medium text-sm border rounded-[25px]"
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        id="clear-button"
                        onClick={clearInput}
                        className=" text-secondary border rounded-[50px] px-4 text-[20px] font-bold"
                    >
                        X
                    </button>
                    <button
                        id="search-button"
                        onClick={performSearch}
                        className=" p-3 text-tertiary border rounded-[25px] text-[20px] font-bold"
                    >
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Google_srch
