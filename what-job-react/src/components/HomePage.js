import React from 'react'
export function HomePage() {
    return (
        <div>
            {/* hero image will need a fetch call helper */}
            {/* logo will be imported later */}

            <img src='whatJob-logo.JPG' style={{ width: 600 }}></img>
            <img src=''></img>

            <div className='heading'>

                <h3>whatJob?</h3>
            </div>
            <div>
                <p>Our purpose website is to provide career guidance for those in mainly primary and high school education, but also for career changers.
                    If you are a professional in a any field please add your knowledge by signing up and creating a post!
                    If you are a student or career changer please go to categories to explore the information provided and leave a up-vote for those that helped you!
                </p>

                {/* will make these links later */}

                <a >Signup</a>
                <a >Categories</a>
            </div>
        </div>
    )
}