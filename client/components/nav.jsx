import React, {useState} from 'react'

const Nav = (props) => {
    const [input, setInput] = useState(false);

    const openSearch = () => {
        const inpt = document.querySelector(".searchInput")
       
        if (!input) {
            inpt.style.display = "unset"
            setInput(true)
        } else {
            inpt.style.display = "none"
            inpt.value = ""
            setInput(false)
        }
    }

    return (
        <div>
            <div className="navCont">
                <div className="logoCont">
                    <img className="logo" src="./images/mydashlogo.png" alt="" />
                </div>
                <div className="navIconCont">
                    <input className="searchInput" placeholder="enter search here" type="text" />
                    <i onClick={() => openSearch()} className="fas fa-search searchIcon"></i>
                    <i className="fas fa-bell bellIcon">
                        <div className="notif"></div>
                    </i>
                </div>
            </div>
        </div>
    )
}

export default Nav