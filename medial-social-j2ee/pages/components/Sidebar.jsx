import styles from '@/styles/Sidebar.module.css'
import Link from "next/link";
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link className={styles.logo} href={"/home"}>
                    <Image src="" alt="" width="80" height="80" />
                </Link>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-home-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/home"}>Trang chủ</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-search-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/home"}>Tìm kiếm</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-add-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/home"}>Tạo bài viết</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-friend-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/home"}>Bạn bè</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-message-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/home"}>Tin nhắn</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-user-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/home"}>Trang cá nhân</Link>
                    </li>
                    {/* <li className={styles.list_item}>
                    <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <span className={styles.text_item}>Market</span>
                    </li>
                    <li className={styles.list_item}>
                    <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <span className={styles.text_item}>Resources</span>
                    </li> */}
                </ul>
            </div>
            <div className={styles.bottom}>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="/icons/icons8-logout-64.png" alt="" width="40" height="40" />
                        <Link className={styles.text} href={"/"}>Đăng xuất</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;