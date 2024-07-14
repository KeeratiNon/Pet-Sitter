/* eslint-disable react/prop-types */

function TypeList({ types }) {
    return (
        <div className=" flex gap-2 md:gap-2">
            {types.map((type, i) => {
                return (
                    <button
                        key={i}
                        className="h-8 w-[63px] border rounded-[99px] px-1 py-4  flex gap-[10px]  justify-center  items-center bg-green-100 border-green-500  text-green-500"
                    >
                        {type}
                    </button>
                );
            })}
        </div>
    );
}

export default TypeList;
