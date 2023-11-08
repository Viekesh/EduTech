import React, { useEffect, useState } from "react";
import './RandomQuotes.css';
import newQuote from "../../../ServiceDataBase/ManualData/Quotes";



const RandomQuotes = () => {

    const [randomText, setRandomText] = useState('');

    const getRandomTxt = () => {
        const randomIndex = Math.floor(Math.random() * newQuote.length);
        const selectedText = newQuote[randomIndex];
        setRandomText(selectedText);
    }

    useEffect(() => {
        getRandomTxt();
    }, []);

    return (
        <>
            <section className="random_quote">
                <h1>{randomText.quote}</h1>
                <h5>{randomText.author == null ? 'Unknown' : randomText.author}</h5>
            </section>
        </>
    )
};



export default RandomQuotes;