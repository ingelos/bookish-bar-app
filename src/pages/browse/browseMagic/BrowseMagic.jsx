import './BrowseMagic.css'
import BrowseSubject from "../../../components/browseSubject/BrowseSubject.jsx";



function BrowseMagic() {

    return (
        <>
            <BrowseSubject
                endpoint={`https://openlibrary.org/subjects/magic.json`}
                subject={'magic'}
                subjectTitle='Magic'
            />

        </>
    )
}



export default BrowseMagic;


