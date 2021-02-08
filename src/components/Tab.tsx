import React, { FC, useContext } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {TabContext} from "../context/TabContext";

const Tab:FC<{value: number}> = ({value}) => {
    const {selectedTab, setSelectedTab} = useContext(TabContext)
    const isCurrentSelected = () => selectedTab === value
    return (
        <div
            className={css(styles.tab, isCurrentSelected() && styles.selected)}
            onClick={() => setSelectedTab(value)}
        >
            {"Tab" + value}
        </div>
    )
}

const styles = StyleSheet.create({
    tab: {
        margin: "0 5px",
        padding: "5px",
        border: "1px solid black"
    },
    selected: {
        backgroundColor: "lightblue"
    }
})

export default Tab