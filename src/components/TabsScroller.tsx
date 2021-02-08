import React from "react"
import {StyleSheet, css} from 'aphrodite'
import Tab from "./Tab";

const arr: number[] = []
for (let i = 1; i <= 10; i++) {
    arr.push(i)
}

const TabsScroller = () => (
    <div className={css(styles.navtabs)}>
        {arr.map((value) => <Tab value={value} />)}
    </div>
)

const styles = StyleSheet.create({
    navtabs: {
        display: "flex",
        overflow: "hidden",
        overflowX: "scroll"
    }
})
export default TabsScroller