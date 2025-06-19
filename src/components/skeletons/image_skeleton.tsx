interface ImageSkeletonType {
    classes: string
}

const ImageSkeleton = ({classes}: ImageSkeletonType) => {
    return <span className={'skeleton ' + classes}></span>
}

export default ImageSkeleton