export const Loader = () => {
    return <div className="flex gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px]">
        <div className="relative w-[20px] h-[50px] bg-white animate-up-down-200"></div>
        <div className="relative w-[20px] h-[50px] bg-white animate-up-down-100"></div>
        <div className="relative w-[20px] h-[50px] bg-white animate-up-down"></div>
    </div>;
};