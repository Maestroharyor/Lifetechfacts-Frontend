interface menus{
    title: string,
    link: string,
    external: boolean
}

export const menuData:menus[] = [
    {
        title: "Home",
        link: "/",
        external: false
    },
    {
        title: "Visit Blog",
        link: "https://www.thelifetechfacts.com",
        external: false
    },
    {
        title: "Join Community",
        link: "/community",
        external: false
    },
    {
        title: "Contact",
        link: "/contact",
        external: false
    },
]