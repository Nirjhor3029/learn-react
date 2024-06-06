import React, { useState } from "react";

export default function TextForm({ heading = "Text Analyzer" }) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleCaptClick = () => {
        const sentences = text.split(".").map((sentence) => sentence.trim());
        const capitalizedSentences = sentences.map((sentence) => {
            if (sentence.length > 0) {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1);
            }
            return sentence;
        });
        const newText = capitalizedSentences.join(". ");
        setText(newText);
    };

    const handleClearClick = () => {
        setText("");
    };

    return (
        <div>
            <div className="container">
                <div className="form-group">
                    {/* <label htmlFor="exampleFormControlTextarea1">
                        Example textarea
                    </label> */}
                    <h2>{heading}</h2>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                    <div className="text_counter_container">
                        <div>Word Count: {text.split(" ").length - 1}</div>
                        <div>Charecter Count: {text.length}</div>
                    </div>
                </div>

                <div className=" action_btn_container">
                    <button
                        className="btn btn-primary action_btn"
                        onClick={handleUpClick}
                    >
                        Upper case
                    </button>
                    <button
                        className="btn btn-primary action_btn"
                        onClick={handleLowClick}
                    >
                        Lower case
                    </button>
                    <button
                        className="btn btn-primary action_btn"
                        onClick={handleCaptClick}
                    >
                        Capitalise case
                    </button>
                    <button
                        className="btn btn-primary action_btn"
                        onClick={handleClearClick}
                    >
                        Clear Text
                    </button>
                </div>

                <h2>
                    <u>Preview</u>
                </h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
