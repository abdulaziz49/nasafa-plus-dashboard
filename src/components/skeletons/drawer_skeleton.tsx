interface DrawerSkeletonType {
    classes?: string
}

const DrawerSkeleton = ({classes}: DrawerSkeletonType) => {
    return (
        <div>
            <span className={`skeleton p-4 ${classes}`}></span>
        </div>
    )
}

export default DrawerSkeleton