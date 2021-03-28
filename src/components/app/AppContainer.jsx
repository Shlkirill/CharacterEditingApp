import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styles from './AppContainer.module.css'
import { initalLifeParametersAC, editParmetersAC, editNameAC, damageUserAC, getCharTC, getSaveCharTC } from '../redux/charcterReducer'
import Skills from './skillsCharacter/Skills'
import Character from './visualCharacter/Character'
import CharacterEditing from './сharacterEditingComponent/CharacterEditing'
import Loader from '../../common/Loader'
import UploadCharacterWindow from './visualCharacter/UploadCharacterWindow/UploadCharacterWindow'
import { getCharctersTC } from '../redux/allCharcterReducerforUpload'

const AppContainer = (props) => {
    let [uploadMode, setUploadMode] = useState(false)

    useEffect(() => {
        props.getChar(1)
    }, [])

    useEffect(() => {
        if (props.id) props.initalLifeParameters()
    }, [props.basicParameters])

    return (
        <div>
            {!props.id ? <Loader /> :
                <div className={styles.container}>
                    <div className={styles.saveAndUploadNavigations}>
                        <button className={styles.upload} onClick={() => setUploadMode(true)} > Загрузить</button>
                        <button className={styles.save} onClick={() => { props.getSaveChar(props.id, props.charcter) }}>Сохранить</button>
                    </div>
                    <div className={styles.appHeader}>
                        <Character name={props.name} avatar={props.avatar} lifeParameter={props.lifeParameter}
                            energy={props.energy} evasion={props.evasion} editName={props.editName} damageUser={props.damageUser} />

                        <CharacterEditing pointParm={props.pointParm} basicParameters={props.basicParameters}
                            editParmeters={props.editParmeters} />
                    </div>
                    <div className={styles.appBottom}>
                        <Skills skills={props.skills} />
                    </div>
                    {uploadMode && <UploadCharacterWindow charcters={props.charcters} setUploadMode={setUploadMode} 
                    getCharcters={props.getCharcters} getChar={props.getChar}/>}
                </div>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        id: state.charcterInfo.id,
        avatar: state.charcterInfo.avatar,
        pointParm: state.charcterInfo.pointParm,
        basicParameters: state.charcterInfo.basicParameters,
        skills: state.charcterInfo.skills,
        name: state.charcterInfo.name,
        lifeParameter: state.charcterInfo.lifeParameter,
        energy: state.charcterInfo.energy,
        evasion: state.charcterInfo.evasion,
        charcter: state.charcterInfo,
        charcters: state.allCharcters.charcters
    }
}
let mapDispatchToProps = {
    getChar: getCharTC,
    initalLifeParameters: initalLifeParametersAC,
    editParmeters: editParmetersAC,
    initalLifeParameters: initalLifeParametersAC,
    editName: editNameAC,
    damageUser: damageUserAC,
    getSaveChar: getSaveCharTC,
    getCharcters: getCharctersTC
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
