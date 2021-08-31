import { useState } from "react";
import { Contact, Food, Hotels,Em, Donate } from "./Icons";
import Link from 'next/link';

function Sidebar(){
    const [isActive, setActive] = useState(false);
    const w=70, h=60;

    return (<>
        <style jsx>{`
        .sidebar-btn{
            position:fixed;
            padding:9px;
            bottom: 10px; right:10px;
            width:${w}px; height:${h}px;
            border-radius: 20px;
            background-color: white;
            z-index: 100;
            cursor: pointer;
            box-shadow: 1px 1px 10px black;
        }
        .sidebar-btn .btn{
            width:100%; height:100%;
            border-radius:15px;
            display:grid; place-content:center;
        }
        .sidebar {
            position: fixed;
            max-width: calc(99vw - ${20+w}px);
            bottom: 10px; right:${20+w}px;
            height: 60px;
            z-index: 90;
            background-color:white;
            box-shadow: 1px 1px 10px black;
            border-radius:20px;
        }
        .sidebar.show { width: 300px; }
        .sidebar.hide { width: 70px; visibility: hidden; }
        .col{
            display:grid; place-content:center; height:50px;
        }
        `}</style>
        <Link href="/Donate">
        <a className="sidebar-btn">
            <img className="btn btn-fill-blue" src="/donation.svg" alt="donate"/>
        </a>
        </Link>
        {/* <div className={`row mx-0 sidebar ${isActive ? 'show' : 'hide'}`}>
            <div className="col">
                <Link href="/Info">
                    <span><Em className="sidebar-icon"/></span>
                </Link>
            </div>
            <div className="col">
                <Link href="/Food">
                    <span><Food className="sidebar-icon"/></span>
                </Link>
            </div>
            <div className="col">
                <Link href="/Hotels">
                    <span><Hotels className="sidebar-icon"/></span>
                </Link>
            </div>
        </div> */}
    </>)
}

export default Sidebar;