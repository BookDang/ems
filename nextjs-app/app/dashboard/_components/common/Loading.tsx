import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface LoadingProps {
    message?: string
}

const Loading: React.FC<LoadingProps> = (props) => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-fit">
                <AiOutlineLoading3Quarters className="animate-spin mx-auto text-3xl text-medium-blue-ems nb-2" />
                {props.message && (
                    <span className="text-medium-blue-ems">
                        {props.message}
                    </span>
                )}
            </div>
        </div>
    )
}

export default Loading
