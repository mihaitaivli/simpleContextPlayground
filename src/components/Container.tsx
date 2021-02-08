import React from 'react'
import { StyleSheet, css } from "aphrodite";

const Container: React.FC = ({children}) => (
    <div className={css(styles.appContainer)}>
        {children}
    </div>
)

const styles = StyleSheet.create({
    appContainer: {
        width: "300px",
        minHeight: "500px",
        border: "1px solid blue"
    }
})

export default Container