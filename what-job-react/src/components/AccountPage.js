import React from 'react'


export function AccountPage(props) {
    return (
        <div>
            <div className='MyPosts'><a href='/NewPost'>
                <button>New Post</button>
            </a>
                {/* Api fetch call to get this users posts */}

            </div>
            <div className='MyDetails'>
                {/* Api fetch to get username, email, password with a check to see if dark mode is active? */}
                <p>Username:</p><button>edit</button>
                <p>Email:</p><button>edit</button>
                <p>Password: ********</p><button>reveal</button><button>edit</button>
                <button>delete account</button>
                <p>Darkmode</p>
                {/* value={props.darkMode} ? */}
                <input type="checkbox" ></input>
            </div>
        </div>
    )
}