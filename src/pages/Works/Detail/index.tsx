import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './style/style.module.css'

interface DetailParams{
    id: string
}

function WorkDetail(){

    const params = useParams<DetailParams>()

    useEffect(() => {
        console.log(params.id)
    }, [params.id])

    return(
        <div className={styles.wrapper}>
            
        </div>
    )
}

export default WorkDetail