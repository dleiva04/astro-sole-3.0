const Filters = ({ filters, handleFilters }) => {

    const handleChange = event => {
        console.log(event.target.value)
        console.log(event.target.name)

        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
        } else {
            console.log('⛔️ Checkbox is NOT checked');
        }
    };

    return (
        <>
            {
                filters.map((filter, index) => (
                    <div key={index} className="hs-accordion-group my-8" data-hs-accordion-always-open >
                        <div
                            className="hs-accordion dark:hs-accordion-active:bg-white/[.05] border-b border-gray-300 my-6"
                            id="size-dropdown"
                        >
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-extralight transition text-gray-600"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                            >
                                {filter.label}
                                <svg
                                    className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"></path>
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"></path>
                                </svg>
                            </button>
                            <div
                                id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 pl-2"
                                aria-labelledby="size-dropdown"
                            >
                                {filter.children && filter.children.map((child, index) => (
                                    <div className="mb-4 flex items-center" key={index}>
                                        <input type="checkbox" name={`talla-${child}`} className="w-5 h-5 mr-2" onChange={handleFilters} value={child} />
                                        <label htmlFor={`talla-${child}`}>{child}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Filters;