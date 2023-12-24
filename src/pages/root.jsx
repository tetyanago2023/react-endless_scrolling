import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            {/* all the other elements */}
            <nav>
                <ul>
                    <li>
                        <Link to={`/with-button`}>З кнопкою</Link>
                    </li>
                    <li>
                        <Link to={`/height-calc`}>Вручну</Link>
                    </li>
                    <li>
                        <Link to={`/infinit-lib`}>Infinit бібліотека</Link>
                    </li>
                    <li>
                        <Link to={`/intersection`}>Intersection Observer API</Link>
                    </li>
                    <li>
                        <Link to={`/virtual-window`}>Virtual react-window</Link>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
