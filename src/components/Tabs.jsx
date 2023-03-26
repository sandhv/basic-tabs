
export const TabPanel = ({ children }) => {
    return (
        <div style={{ display:'flex', gap: 10}}>
            {children}
        </div>
    )
}



export const Tab = ({ onClick, label, isActive, children }) => {
    return (
        <div>
            <button onClick={onClick}
            style={{color:isActive? 'green': 'white'}}>{label}</button>
            {isActive && <div>{children}</div>}
        </div>
    )
}