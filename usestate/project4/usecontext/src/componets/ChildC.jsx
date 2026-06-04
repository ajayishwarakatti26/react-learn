// 1. Fixed the import to 'useContext'
import React, { useContext } from 'react'
import { UserContext } from "../App";

const ChildC = () => {
    // 2. This will now work perfectly since it's properly imported above
    const user = useContext(UserContext)
    
    return (
        <div>
            {user && user.name}
        </div>
    )
}

export default ChildC