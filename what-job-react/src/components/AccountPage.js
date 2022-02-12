import React from 'react'

export function AccountPage(props) {
    return (
        <>
            <heading>My Account</heading>
        
        
            <div className='edit-my-account' ><a href='/NewPost'>
                <div><button >New Post</button></div>
            </a> </div>
                {/* Api fetch call to get this users posts */}

           
            {/* <div className='MyDetails'> */}
                {/* Api fetch to get username, email, password with a check to see if dark mode is active? */}
                
                
                <div className='my-account'>
                <label>Username:</label><button>edit</button>
                <label>Email:</label><button>edit</button>
                <label>Password: ********</label>
                <button>reveal</button>
                </div>
                <div className='edit-my-account'>
                <button>edit</button>
                <p /><button>delete account</button></div>
                {/* <p><label>Darkmode</label></p> */}
                {/* value={props.darkMode} ? */}
                {/* <input type="checkbox" ></input> */}
            {/* </div> */}
        </>
    )
}