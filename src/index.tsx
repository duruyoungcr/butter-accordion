import * as React from 'react'
import './index.scss'


export interface CollapsiblePropsTypes {
    trigger: string | React.ReactElement;
    content: string | React.ReactElement;
    rounded?: boolean,
    roundedSize?: 'sm' | 'md' | 'lg' | 'xl'
    triggerIcon?: string | JSX.Element,
    color?: string,
    borderWidth?: number,
    paddingSize?: 'sm' | 'md' | 'lg' | 'xl'
}

const defaultTriggerIcon = <svg className="svg-icon" viewBox="0 0 20 20">
    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" fill="currentColor"></path>
</svg>

export const Collapsible = (
    { trigger,
        content,
        rounded = true,
        roundedSize = 'md',
        triggerIcon = defaultTriggerIcon,
        color = '#333333',
        borderWidth = 2,
        paddingSize = 'md'
    }: CollapsiblePropsTypes) => {
    const [expand, setExpand] = React.useState<boolean>(false)
    return (
        <div
            className={`bc_wrapper-container ${'padding-' + paddingSize}`}
            style={{ border: `${borderWidth}px solid ${color}` }}
        >
            <div
                className={`bc_trigger-container ${rounded && 'rounded'} ${roundedSize}`}
                onClick={() => setExpand(!expand)}
            >
                <div className="bc_trigger">{trigger}</div>
                <div className={`bc_trigger-icon ${expand && 'expanded'}`}>{triggerIcon}</div>
            </div>
            <div className={`bc_content-container ${expand && 'expanded'}`}>
                <div className="bc_content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapsible