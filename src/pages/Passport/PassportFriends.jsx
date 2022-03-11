import React, {useEffect, useState} from "react";
import {FiCheck, FiTrash2, FiX} from "react-icons/fi";
import banner from "@/assets/images/homepage/hero-banner.jpg";

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
    const [researchResult, setResearchResult] = useState([]);

    const handleFriendDeleted = (user) => {
        console.log("deleted friend");
        user.isFriend = false;
    }
    const handleFriendRequestDeclined = (user) => {
        console.log("declined friend request");
        user.isAsking = false;
    }
    const handleFriendRequestAccepted = (user) => {
        console.log("accepted friend request");
        user.isAsking = false;
        user.isFriend = true;
    }

    const handleChange = e => {
        setResearch(e.target.value);
        if (research !== '') {
            const matchingUsers = usersBank.filter(u => u.name.indexOf(research) !== -1);
            setResearchResult(matchingUsers);
        }
    }

    useEffect(() => {
        if (research !== '') {
            const results = usersBank.filter(user => user.name.toLowerCase().includes(research.toLowerCase()));
            setResearchResult(results);
        } else {
            setResearchResult([]);
        }
    }, [research]);


    const share = () => {
        alert("share Hello World");
    }

    const UserItem = ({user}) => {
        return (
            <div className={"friend-item-action col-span-1 pr-4"}>
                {user.isFriend &&
                    <div className={"friend-btn"}>
                        <button onClick={() => handleFriendDeleted(user)} className={"btn btn-icon btn-outline"}>
                            <FiTrash2/>
                        </button>
                    </div>
                }
                {!user.isFriend && user.isAsking &&
                    <div className={"friend-btn"}>
                        <button onClick={() => handleFriendRequestAccepted(user)} className={"btn btn-icon btn-outline mr-2"}>
                            <FiCheck/>
                        </button>
                        <button onClick={() => handleFriendRequestDeclined(user)} className={"btn btn-icon btn-outline"}>
                            <FiX/>
                        </button>
                    </div>
                }
            </div>
        );
    }

    return (
        <div id={"passport-friends"} className={"bg-beige"}>
            <div className={"compass"}></div>
            <div className={"w-full "}>
                <div id="bloc-search" className="my-10 py-10">
                    <div className="title-container">
                        <h2 className={"h2"}>Ajouter un ami</h2>
                    </div>

                    <form>
                        <div className={"mb-4 grid grid-cols-9 gap-4"}>
                            <div className={"form-field col-span-7 col-start-2"}>
                                <input type="text" name={"search"} value={research}
                                       className={"search-input focus:border-dark-brown focus:ring-dark-brown"}
                                       onChange={handleChange}/>
                            </div>
                        </div>
                    </form>

                    <div className={"mb-4"}>
                        <div className={"friend-list"}>
                            {researchResult !== [] &&
                                researchResult.map((result, index) => (
                                    <div key={index} className={"grid grid-cols-2 gap-4"}>
                                        <div className={"friend-item-name col-span-1"}>
                                            <img
                                                src={banner}
                                                alt={"avatar"}
                                                className={"h-10 w-10 mx-10"}
                                            />
                                            <p>{result.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <button className={"btn btn-dark mx-auto my-5"} onClick={share}>
                        <span className={"btn-text"}>Partager Hello World</span>
                    </button>
                </div>
                <div id="bloc-friends" className="my-10 py-10">
                    <div className="title-container">
                        <h2 className={"h2"}>Mes compagnons d'aventure</h2>
                    </div>
                    <div className={"mb-4"}>
                        <div className={"friend-list"}>
                            {usersBank.map((user, index) => {
                                if (user.isFriend || user.isAsking) {
                                    return (
                                        <div key={index} className={"grid grid-cols-2 gap-4"}>
                                            <div className={"friend-item-name col-span-1"}>
                                                <img
                                                    src={banner}
                                                    alt={"avatar"}
                                                    className={"h-10 w-10 mx-10"}
                                                />
                                                <p>{user.name}</p>
                                            </div>
                                            <UserItem user={user}/>
                                        </div>
                                    );
                                } else {
                                    return "";
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PassportFriends;