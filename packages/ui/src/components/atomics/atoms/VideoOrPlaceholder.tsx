import React from 'react'

type VideoProps = React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
>

const VideoOrPlaceholder: React.FC<
    Omit<VideoProps, 'src'> & {
        src?: VideoProps['src'] | null
        alt?: string | null
    }
> = ({ src, alt, children, ...props }) => {
    if (src) {
        return (
            <video src={src} {...props}>
                {children}
                {alt || 'video'}
            </video>
        )
    }
    return (
        <video
            src={require('../../../assets/video/placeholder.mp4')}
            {...props}
        >
            {children}
            {alt}
        </video>
    )
}

export default VideoOrPlaceholder
