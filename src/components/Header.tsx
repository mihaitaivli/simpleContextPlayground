import React, { FC } from 'react'
import {StyleSheet, css} from "aphrodite";
import TabContextProvider from "../context/TabContext";


const Header:FC = ({children}) => (
    <TabContextProvider>
        <div className={css(styles.header)}>
            {children}
        </div>
    </TabContextProvider>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: "lightgray",
        padding: "5px"
    }
})

export default Header