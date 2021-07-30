import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby'

const TagsList = ({ recipes }) => {
    const allTags = setupTags(recipes)
    return (
        <div className="tag-container">
            <h4>Recipes</h4>
            <div className="tags-list">
                {allTags.map((tag,index)=>{
                    const [text, value] = tag
                    return <Link key={index} to={`/${text}`}>{text} ({value})</Link>
                })}
            </div>
        </div>
    )
}

export default TagsList
