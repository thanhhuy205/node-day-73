import Link from "next/link";

const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about" },
    { label: "Sản phẩm", href: "/products" },
    { label: "Liên hệ", href: "/contact" }
];
const Navbar = () => {
    return (
        <nav style={{ borderBottom: "1px solid #ddd", padding: "1rem", backgroundColor: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Logo</div>
                <div style={{ display: "flex", gap: "2rem" }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{ textDecoration: "none", color: "#333", fontWeight: "500" }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;