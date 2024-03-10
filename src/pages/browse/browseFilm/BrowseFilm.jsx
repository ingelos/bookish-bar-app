import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";

function BrowseFilm() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/film.json`}
                subject={'film'}
                subjectTitle='Film'
            />
        </>
    )
}

export default BrowseFilm;