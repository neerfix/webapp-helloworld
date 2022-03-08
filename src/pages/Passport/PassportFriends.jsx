import React, {useState} from "react";
import {FiCheck, FiEdit3, FiTrash2, FiX} from "react-icons/fi";
import {NavLink} from "react-router-dom";

function PassportFriends() {
    const usersBank = [
        {name: "Aimée", isFriend: false, isAsking: false},
        {name: "Gregg", isFriend: false, isAsking: false},
        {name: "Louise", isFriend: false, isAsking: true},
        {name: "Matisse", isFriend: true, isAsking: false},
        {name: "Emeline", isFriend: true, isAsking: false},
        {name: "Nico", isFriend: true, isAsking: false},
        {name: "Romain", isFriend: true, isAsking: false},
    ]
    const [research, setResearch] = useState('');

    const findUsers = () => {
        if (research !== '') {
            console.log(research);
            const matchingUsers = usersBank.filter(u => u.name.indexOf(research) !== -1);
            console.log(matchingUsers);
        }
    }

    const share = () => {
        alert("share Hello World");
    }

    const UserItem = (user) => (
        <div className={"row"}>
            <p>{user.name}</p>
            {user.isFriend &&
                <div>
                    <button className={"btn btn-icon btn-outline"}>
                        <FiEdit3/>
                    </button>
                </div>
            }
            {!user.isFriend && user.isAsking &&
                <div>
                    <button className={"btn btn-icon btn-outline"}>
                        <FiCheck/>
                    </button>
                    <button className={"btn btn-icon btn-outline"}>
                        <FiX />
                    </button>
                </div>
            }
        </div>
    )

    return (
        <div id={"passport-friends"} className={"mx-auto bg-beige"}>
            <div className={"compass"}></div>
            <div className={"w-full "}>
                <div id="bloc-search" className="my-10 py-10">
                    <div className="title-container">
                        <h2 className={"h2"}>Ajouter un ami</h2>
                    </div>

                    <form onChange={findUsers}>
                        <div className={"mb-4 grid grid-cols-9 gap-4"}>
                            <div className={"form-field col-span-7 col-start-2"}>
                                <input type="text" name={"search"} value={research}
                                       className={"focus:border-dark-brown focus:ring-dark-brown"}
                                       onChange={(e) => setResearch(e.target.value)}/>
                            </div>
                        </div>
                    </form>

                    <div className={"grid grid-cols-9 gap-4"}>
                        {research &&
                            <p>{research}</p>
                        }
                    </div>

                    <button className={"btn btn-dark mx-auto my-5"} onClick={share}>
                        <span className={"btn-text"}>Partager Hello World</span>
                    </button>
                </div>
                <div id="bloc-friends" className="my-10 py-10">
                    <div className="title-container">
                        <h2 className={"h2"}>Mes compagnons d'aventure</h2>
                    </div>
                    {usersBank.map((user, index) => (
                        <UserItem user={user} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PassportFriends;