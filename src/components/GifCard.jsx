import { useState, useEffect } from "react";

export const GifCard = ({ url, title }) => {

    const [copied, setCopied] = useState(false);

    const copyGifUrl = (url) => {
        navigator.clipboard.writeText(url);
        setCopied(true);
    }

    useEffect(() => {
        if (copied === true) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied])


    return (
        <div
            onClick={() => copyGifUrl(url)}
            className="card">
            <img src={url}></img>
            {
                copied ?
                    <p className="copied-message">Copied to clipboard!</p>
                    :
                    <p>{title}</p>
            }

        </div>
    )
}
