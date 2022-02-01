import React from 'react'

export function CategoriesPage() {
    return (
        <div>
            <form>
                {/* does this need to be in a form? this will need to be majorities filled in by a api call into a 
                for each category do this probably. as well as below will need a for each category take the the image or we could host it here. not sure */}
                <label for="Categories">Choose a field:</label>
                <select id="Jobs" name="Jobs" size="1">
                    <option value="gamer">gamer</option>
                    <option value="youtube gamer">youtube gamer</option>
                </select>
            </form>
            <img></img>
            {/* for each category take the image and display it as such in rows */}
        </div>
    )
}