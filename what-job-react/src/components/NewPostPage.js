// Import React dependencies.
import React from 'react'

export function NewPostPage() {

    return (
        <div>
            <header>New post</header>
            <form className='login-signup'>

                <label>Role title</label>
                <input></input>
                <label>Intro</label>
                <textarea name="message" rows="10" cols="30">
                    Short introduction for yourself, how long you have worked in this
                    position and an example of a great day and a bad day at your job.
                </textarea>
                <label>Day to day</label>
                <textarea name="message" rows="10" cols="30">
                    Go over the boring/exciting stuff that you often overlook but most of your days consist of
                </textarea>
                <label>Career Path</label>
                <textarea name="message" rows="10" cols="30">
                    How did you get to this position, study, luck, hardship, Nepotism.
                    As well as ways that you know that enable a person to enter this field today.
                </textarea>
                <label>expected salary</label>
                <input></input>
                <label>difficulty of the position</label>
                <select >
                    <option></option>
                    <option value={1}>1/10</option>
                    <option value={2}>2/10</option>
                    <option value={3} >3/10</option>
                    <option value={4} >4/10</option>
                    <option value={5} >5/10</option>
                    <option value={6} >6/10</option>
                    <option value={7} >7/10</option>
                    <option value={8} >8/10</option>
                    <option value={9} >9/10</option>
                    <option value={10} >10/10</option>
                </select>
                <button>publish</button>
            </form>
        </div>
    )
}