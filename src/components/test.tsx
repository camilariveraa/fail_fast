const Test = () => {
    const handleClick = () => {
        window.open("https://www.ycombinator.com", "_blank");
    };

    return ( 
        <button
            onClick={handleClick}
            className="w-40 h-20 bg-lime-400 flex items-center justify-center p-4 m-3 border-2 border-blue-200 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
            Hello World
        </button>
    );
}
 
export default Test;
    