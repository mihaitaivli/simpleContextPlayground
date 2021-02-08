import React, {FC, createContext, useState} from 'react'

export const TabContext = createContext({
    selectedTab: 1,
    setSelectedTab: (tabValue: number) => {}
})

const TabContextProvider: FC = ({children}) => {
    const [selectedTab, setSelectedTab] = useState(1)
    return(
        <TabContext.Provider value={{selectedTab, setSelectedTab}}>
            {children}
        </TabContext.Provider>
    )
}

export default TabContextProvider

