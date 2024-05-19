'use client'
import { useEffect, useState } from "react"
import Breadcrumb from './Breadcrumb'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Header1 from "./Header1"
import Header2 from './Header2'
import PageHead from './PageHead'
import { useDispatch, useSelector } from "react-redux"
import { fetchSettings } from "@/redux/slices/settingSlice"
import useHttp from "@/hooks/useHttp"

export default function Layout({ headerStyle, handleRemove, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    const dispatch = useDispatch();
    const { isLoading, apiService } = useHttp();
    console.log("lafyhoasfdoashjodfajsfosjaofi")
    const settingss = useSelector(state => state.settings)
    console.log(settingss);
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(state => !state)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    useEffect(() => {
        dispatch(fetchSettings(apiService));
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])

    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}

                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}
                </main>
                
                {!footerStyle && < Footer1 />}  
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
            </div>
        </>
    )
}
