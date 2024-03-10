import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseMusic() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/music.json`}
                subject={'music'}
                subjectTitle='Music'
            />
        </>
    )
}

export default BrowseMusic;