import "./Header.css"

function Header()
{
    return (
        <div className="Header">
            <input type="text" placeholder="Movie name"/>
            <input type="text" placeholder="Comment"/>
            <select defaultValue="rating">
                {
                    [1,2,3,4,5].map(
                        choice => <option>
                            {choice} {choice == 1 ? "star" : "stars"}
                        </option>
                    )
                }
            </select>
            <button>Add</button>
        </div>
    )
}

export default Header