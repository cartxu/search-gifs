
export const GifCard = ({id, url, title}) => {
    return (
        <div className="card">
            <img src={url}></img>
            <p>{title}</p>
        </div>
    )
}
