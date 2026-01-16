type PageTitleProps = {
    title: string
    icon?: React.ReactNode
    children?: React.ReactNode
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center mb-2 border-b pb-2 border-normal-blue-ems">
                {props.icon && <span className="mr-2">{props.icon}</span>}
                <h1 className="text-2xl text-medium-blue-ems leading-none">
                    {props.title}
                </h1>
            </div>
            <div className="actions flex gap-2.5">{props.children}</div>
        </div>
    )
}

export default PageTitle
