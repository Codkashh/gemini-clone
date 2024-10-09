import { createContext, useState } from "react";
import runChat from "../config/gemini";
export const Context = createContext();

const ContextProvider = (props) => {
        const [input, setInput] = useState("");
        const [recentPrompt, setRecentPrompt] = useState(""); // storing the recent prompts data
        const [prevPrompts, setPrevPrompts] = useState([]); // storing the history of prompts data
        const [showResult, setShowResult] = useState(false); // displaying the result
        const [loading, setLoading] = useState(false); // for loading
        const [resultData, setResultData] = useState(""); // displaying the result on web page

    const onSent = async (promt) => {
        await runChat(promt)
    }

    onSent("what is react js");

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompts,
        setPrevPrompts,
        showResult,
        loading,
        resultData,
        onSent,
        newChat,
      };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;