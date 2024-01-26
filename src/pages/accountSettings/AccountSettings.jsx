import Button from "../../components/button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";


function AccountSettings() {

    function handleClick() {
        console.log(`You're being send to the page where you can edit your account settings`)

    }

    return (
        <>
            <section className='account-page outer-container'>
                <div className='account-page inner-container'>
                    <div className='account-container'>
                        <div className='account-information'>
                            <p>Username: {}</p>
                            <p></p>
                            <p>Email:</p>
                            <p></p>
                            <p>Password:</p>
                        </div>
                    </div>
                    <Button type='submit' className='edit-profile' onClick={handleClick}>Edit account settings</Button>
                </div>
            </section>
        </>

    )
}

export default AccountSettings;