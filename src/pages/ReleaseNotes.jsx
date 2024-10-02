import Header from "../components/Header";
import './ReleaseNotes.css'
import Release from "../components/Release";
import { useState } from "react";
import releasenotes from '../releasenotes/releasenotes.json'

function ReleaseNotes() {
    const [shownReleaseNotes, setShownReleaseNotes] = useState([]);

    const datesList = releasenotes.releasenotes.map(
        item =>
        <div key={item.title}>
            <div
                className='dropdown'
            >
                {!shownReleaseNotes.includes(item.title) &&
                <img
                    src="public/arrow_right.svg"
                    onClick={() => setShownReleaseNotes((prevState) => [...prevState, item.title])}
                />}
                {shownReleaseNotes.includes(item.title) &&
                <img
                    src="public/arrow_down.svg"
                    onClick={() => setShownReleaseNotes((prevState) => prevState.splice(prevState.indexOf(item.title)), 1)}
                    // OnClick removes the clicked item rfom the showReleaseNotes array.
                    />}
                <h4 key={item.title}>{item.date}</h4>
            </div>
            <div>
                {shownReleaseNotes.includes(item.title) && <Release clickedRelease={item.title}/>}
            </div>
            <div className="divider"></div>
        </div>
    )

    return (
        <>
        <Header />
        <div className="releasenotes">
            <div className="seperator left"></div>
            <div className="main">
                <h1>Anove Release Notes</h1>
                <p>Here you can find the release notes for the most recent Anove verison.</p>
                <div className="divider"></div>

                <h1 className="version">Anove 2.0 Release Notes</h1>
                {datesList}
            </div>
            <div className="seperator right"></div>
        </div>
        </>
    )
}

export default ReleaseNotes;