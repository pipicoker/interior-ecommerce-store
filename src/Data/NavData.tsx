type NavDataItem = {
    id: string;
    title: string;
    path?: string;
}

const NavData: NavDataItem[] = [
    {
        id: "one",
        title: "Home",
        path: "/"
    },
    {
        id: "two",
        title: "Product",
        path: "/productpage"
    },
    {
        id: "three",
        title: "About Us",
        path: "/Aboutpage"
    },
    {
        id: "four",
        title: "Contact Page",
        path: "/Contactpage"
    },
]

export default NavData