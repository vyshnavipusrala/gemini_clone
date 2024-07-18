import './Sidebar.css';
import { IoMenuSharp } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { MdHelpOutline } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

    const loadPrompt= async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    };
    return (
        <div className="sidebar">
            <div className="top">
                < IoMenuSharp className='menu' onClick={() => setExtended(prev => !prev)} />
                <div onClick={()=>newChat()}className="newchat">
                    <GoPlus className='img' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                <FaRegMessage className='img' />
                                <p>{item.slice(0,18)}</p>
                            </div>
                        )
                    })}

                </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <MdHelpOutline className='img' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FaHistory className='img' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <MdOutlineSettings className='img' />
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar
