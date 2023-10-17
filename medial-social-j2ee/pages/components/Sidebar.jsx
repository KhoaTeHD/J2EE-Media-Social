import styles from '@/styles/Sidebar.module.css'
import Link from "next/link";
import Image from 'next/image';
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link className={styles.logo} href={"/home"}>
                    <Image src="" alt="" width="120" height="120" />
                </Link>
            </div>
            <div className={styles.center}>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <Link className={styles.text} href={"/home"}>Trang chủ</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <Link className={styles.text} href={"/home"}>Tìm kiếm</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <Link className={styles.text} href={"/home"}>Tạo bài viết</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <Link className={styles.text} href={"/home"}>Bạn bè</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <Link className={styles.text} href={"/home"}>Tin nhắn</Link>
                    </li>
                    <li className={styles.list_item}>
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
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
                        <Image className={styles.icon} src="" alt="" width="50" height="50" />
                        <Link className={styles.text} href={"/home"}>Đăng xuất</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;