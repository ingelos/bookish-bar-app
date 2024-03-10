import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowsePainting() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/painting__paintings.json`}
                subject={'painting__paintings'}
                subjectTitle='Painting and Paintings'
            />
        </>
    )
}

export default BrowsePainting;