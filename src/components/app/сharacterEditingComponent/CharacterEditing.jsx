import React from 'react'
import styles from './CharacterEditing.module.css'
import Parameter from './Parameter'

const CharacterEditing = ({ pointParm, basicParameters, editParmeters }) => {

    let arr = basicParameters.map((item, index) => {
        return <Parameter key={index} name={item.name} points={item.points} editParmeters={editParmeters} />
    })
    return (
        <div className={styles.container}>
            <div className={styles.characterEditing}>
                <div className={styles.titleParameters}>
                    <p>Достпуные очки:</p><span>{pointParm}</span>
                </div>
                {arr}
            </div>
        </div>
    )
}

export default CharacterEditing