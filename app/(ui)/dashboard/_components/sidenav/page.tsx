import Link from "next/link"
import { FaChalkboardTeacher } from "react-icons/fa"

const SideNav = () => {
    return (
        <div className="side-nav h-full rounded-r-2xl bg-white max-w-64 w-full fixed top-0 left-0 hidden sm:block sm:static ">
            <nav>
                <ul className="flex flex-col p-6 space-y-4">
                    <li>
                        <Link href="#">
                            <FaChalkboardTeacher className="inline mr-2" />
                            Teachers
                        </Link>
                    </li>
                    <li>
                        <Link href="#">Students</Link>
                    </li>
                    <li>
                        <Link href="#">Classes</Link>
                    </li>
                    <li>
                        <Link href="#">Subjects</Link>
                    </li>
                    <li>
                        <Link href="#">Exams</Link>
                    </li>
                    <li>
                        <Link href="#">Results</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default SideNav
