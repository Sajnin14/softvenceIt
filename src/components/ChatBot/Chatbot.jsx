import React, { useState, useRef, useEffect } from "react";
import './Chatbot.css'
import { FaArrowUp, FaCheckCircle, FaRegClipboard, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { IoVolumeHighOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import vector from '../../assets/Vector.png';
import vector2 from '../../assets/Vector (1).png';

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! I'm your AI sales coach. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const chatBoxRef = useRef(null);

    const sendMessage = () => {
        const trimmed = input.trim();
        if (trimmed === "") return;

        setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
        setInput("");

        setMessages((prev) => [...prev, { sender: "bot", text: "Thanks for your message!" }]);
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    return (
        <div className="background-chat font-questrial">

            <div className="w-[1440px] mx-auto py-7">
                <p className="text-[#FCE38A] text-2xl">Live Ai Coach</p>
                <h3 className="text-6xl text-white mt-5">Take a Suggestion Coaching </h3>


                <div className="my-[60px] md:flex gap-5 ">
                    {/* div1 */}
                    <div className="rounded-xl bg-white pt-3 w-full">
                        <p className="text-lg text-[#1B1B1B] px-8 pb-6">AI Sales Coach</p>

                        <div className="chat-container bg-[#CDCDCD] px-8 pt-3 pb-6 flex flex-col justify-between min-h-[500px]">
                            <div
                                className="chat-box space-y-3 max-h-[400px] overflow-y-auto px-2 flex-1"
                                ref={chatBoxRef}
                            >
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-xs px-4 py-2 rounded-lg text-sm ${msg.sender === "user"
                                                ? "bg-[#002868] text-white rounded-br-none"
                                                : "bg-white text-black rounded-bl-none"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* this one */}
                            <div className="flex items-center gap-2 justify-between mx-1">
                                <div className="chat-input w-full">
                                    <input
                                        type="text"
                                        className="input input-bordered border-[#E5E7EB] rounded-[4px] text-[#9A9A9A] w-full"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Ask anything you need"
                                    />
                                </div>

                                <button
                                    onClick={sendMessage}
                                    className="bg-[#002868] text-white text-[17px] rounded-lg flex items-center px-4 py-2 gap-2"
                                >
                                    Send <FaArrowUp />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* div-2 */}
                    <div className="bg-white text-2xl rounded-[57px] p-[27px] flex flex-col gap-10 w-[70px] items-center justify-center">
                        <p><GrPowerCycle /></p>
                        <p><FaThumbsUp /></p>
                        <p><FaThumbsDown /></p>
                        <p><FaRegClipboard /></p>
                        <p><IoVolumeHighOutline /></p>
                    </div>

                    {/* div 3 */}
                    <div>
                        <div className="bg-[#EFEFEF] p-[30px] rounded-[20px] mb-6">
                            <p className="text-[#323232] text-[32px] font-bold">Real-time Analysis</p>

                            <div className="bg-white my-5 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <p className="text-xl text-[#06B217] bg-white"><FaCheckCircle /></p>
                                    <p className="text-lg text-[#171D25]"> Confidence level</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <progress
                                        className="progress progress-success w-56 h-3"
                                        value="60"
                                        max="100"
                                    ></progress>
                                    <span className="text-sm font-medium">60%</span>
                                </div>
                            </div>

                            <div className="bg-white my-5 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <p className="text-xl text-[#002868] bg-white"><GoGraph /></p>
                                    <p className="text-lg text-[#171D25]"> Confidence level</p>

                                </div>
                                <p className="text-[#909090]">85% improvement in objection handling</p>

                            </div>
                        </div>


                        <div className="bg-[#EFEFEF] p-[30px] rounded-[20px]">
                            <p className="text-[#323232] text-[32px] font-bold">Quick Actions</p>

                            <div className="flex gap-5">
                                <div className="p-4 bg-white rounded-2xl">
                                   <img src={vector} alt="" />
                                   <p className="text-[#171D25] text-lg font-semibold">Generate Script</p>
                                </div>

                                <div className="p-4 bg-white rounded-2xl">
                                   <img src={vector2} alt="" />
                                   <p className="text-[#171D25] text-lg font-semibold">Practice Pitch</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Chatbot;
