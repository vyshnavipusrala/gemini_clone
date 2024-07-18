import "./Main.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosCompass } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";

import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <FaRegUserCircle />
            </div>
            <div className="main-container">
                 {!showResult
                 ?<>
                 <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <IoIosCompass className="img" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept:urban planning</p>
                                <FaRegLightbulb className="img" />
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding for our work retreat</p>
                                <FaRegMessage className="img" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <FaCode className="img" />

                            </div>
                        </div>
                 
                 </>
                 :
                 <div className="result">
                        <div className="result-title">
                        <FaRegUserCircle />
                        <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                         <SiGooglegemini />
                         {loading?<div className="loader">
                            <hr />
                            <hr />
                            <hr />
                         </div>:
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                         }
                        </div>
                 </div>
                 }
                         
                        <div className="main-bottom">
                            <div className="search-box">
                                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a promt" />
                                <div>
                                    <GrGallery className="i" />
                                    <IoMicOutline className="i" />
                                    <IoMdSend className="i" onClick={() => onSent()} />
                                </div>
                            </div>
                            <p className="bottom-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repellat neque  </p>
                        </div>
                    </div>
        </div>
            )
}

export default Main
