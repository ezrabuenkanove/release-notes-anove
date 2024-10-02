import releasenotes from '../releasenotes/releasenotes.json'
import './Release.css'

function Release({clickedRelease}) {
    let id;
    for (let i = 0; i < releasenotes.releasenotes.length; i++) {
        if (releasenotes.releasenotes[i].title == clickedRelease) {
            id = i
        }
    }

    const featureList = releasenotes.releasenotes[id].newfeatures.map(
        feature => <li key={feature.id}>{feature.text}</li>
    )
    const bugList = releasenotes.releasenotes[id].bugfixes.map(
        bug => <li key={bug.id}>{bug.text}</li>
    )
    return (
        <div className='releasenote'>
            <h3 className='subtitle'>New Features</h3>
            <p>{releasenotes.releasenotes[id].featuretext}</p>
            <ul>{featureList}</ul>
            <h3 className='subtitle'>Bugfixes and Usability Improvements</h3>
            <p>{releasenotes.releasenotes[id].bugtext}</p>
            <ul>{bugList}</ul>
        </div>
    )
}

export default Release;