type PageTitleProps = {
    title: string
    icon?: React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div className="flex items-center mb-2 border-b pb-2 border-normal-blue-ems">
            {props.icon && <span className="mr-2">{props.icon}</span>}
            <h1 className="text-2xl text-medium-blue-ems leading-none">
                {props.title}
            </h1>
        </div>
    )
}

export default PageTitle
