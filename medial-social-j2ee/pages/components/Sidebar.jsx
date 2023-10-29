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
                    <Link className={styles.list_item} href={"/Homepage"}>
                        <Image className={styles.icon} src="/icons/icons8-home-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Trang chủ</p>
                    </Link>
                    <Link className={styles.list_item} href={"/home"}>
                        <Image className={styles.icon} src="/icons/icons8-search-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Tìm kiếm</p>
                    </Link>
                    <Link className={styles.list_item} href={"/home"}>
                        <Image className={styles.icon} src="/icons/icons8-add-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Tạo bài viết</p>
                    </Link>
                    <Link className={styles.list_item} href={"/FriendList"}>
                        <Image className={styles.icon} src="/icons/icons8-friend-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Bạn bè</p>
                    </Link>
                    <Link className={styles.list_item} href={"/home"}>
                        <Image className={styles.icon} src="/icons/icons8-message-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Tin nhắn</p>
                    </Link>
                    <Link className={styles.list_item} href={"/home"}>
                        <Image className={styles.icon} src="/icons/icons8-user-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Trang cá nhân</p>
                    </Link>
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
                    <Link className={styles.list_item} href={"/"}>
                        <Image className={styles.icon} src="/icons/icons8-logout-64.png" alt="" width="40" height="40" />
                        <p className={styles.text}>Đăng xuất</p>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;