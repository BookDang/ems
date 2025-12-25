import Link from "next/link"
import { FaChalkboardTeacher } from "react-icons/fa"
import { PiStudent } from "react-icons/pi"
import { SiGoogleclassroom } from "react-icons/si"
import { MdOutlineSubject } from "react-icons/md"
import { PiExam } from "react-icons/pi"

const SideNav = () => {
    return (
        <div className="side-nav h-full rounded-l-xl bg-white max-w-64 w-full fixed top-0 left-0 hidden sm:block sm:static ">
            <nav>
                <div>
                    <h2 className="text-2xl rounded-tl-xl font-bold text-white bg-dark-blue-ems/70 p-4 border-b border-gray-200">
                        <Link
                            href="#"
                            className="hover:text-white block w-full h-full"
                        >
                            <span>EMS Dashboard</span>
                        </Link>
                    </h2>
                </div>
                <ul className="flex flex-col p-4 space-y-6">
                    <li>
                        <Link
                            href="/dashboard/teachers"
                            className=" w-full py-2 rounded-sm hover:bg-white/25 hover:shadow-sm shadow-light-orange-ems/30 block px-4"
                        >
                            <FaChalkboardTeacher className="inline mr-2 text-light-orange-ems" />
                            Teachers
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className=" w-full py-2 rounded-sm hover:bg-white/25 hover:shadow-sm shadow-light-orange-ems/30 block px-4"
                        >
                            <PiStudent className="inline mr-2 text-light-orange-ems" />
                            Students
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className=" w-full py-2 rounded-sm hover:bg-white/25 hover:shadow-sm shadow-light-orange-ems/30 block px-4"
                        >
                            <SiGoogleclassroom className="inline mr-2 text-light-orange-ems" />
                            Classes
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className=" w-full py-2 rounded-sm hover:bg-white/25 hover:shadow-sm shadow-light-orange-ems/30 block px-4"
                        >
                            <MdOutlineSubject className="inline mr-2 text-light-orange-ems" />
                            Subjects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className=" w-full py-2 rounded-sm hover:bg-white/25 hover:shadow-sm shadow-light-orange-ems/30 block px-4"
                        >
                            <PiExam className="inline mr-2 text-light-orange-ems" />
                            Exams
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default SideNav
