import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="border-2 max-w-7xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;