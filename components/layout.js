import Header from './header.js'

const Layout = ({ children }) => {
    return <div>
        <Header />
        {children}
    </div>
}

export default Layout