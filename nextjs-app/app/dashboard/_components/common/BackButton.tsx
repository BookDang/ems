"use client"

import { RiArrowGoBackFill } from "react-icons/ri"

export default function BackButton() {
    return (
        <RiArrowGoBackFill
            onClick={() => {
                window.history.back()
            }}
            size={20}
            className="text-gray-600 cursor-pointer"
        />
    )
}
