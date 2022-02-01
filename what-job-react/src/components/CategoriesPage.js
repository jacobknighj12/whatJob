
// Import React dependencies.
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

export function CategoriesPage() {
    const [editor] = useState(() => withReact(createEditor()))
    // Add the initial value when setting up our state.
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'This text is editable click me!' }],
        },
    ])
    return (
        <div>

            <form>

                {/* does this need to be in a form? this will need to be majorities filled in by a api call into a 
                for each category do this probably. as well as below will need a for each category take the the image or we could host it here. not sure */}
                <label >Choose a field:</label>
                <select id="Jobs" name="Jobs" size="1">
                    <option value="gamer">gamer</option>
                    <option value="youtube gamer">youtube gamer</option>
                </select>
            </form>
            {/* for each category take the image and display it as such in rows */}
        </div>
    )
}