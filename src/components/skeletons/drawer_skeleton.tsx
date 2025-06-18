interface DrawerSkeletonType {
    classes: string
}

const DrawerSkeleton = ({classes}: DrawerSkeletonType) => {
    return (
        <div>
            <span className={'skeleton lg:p-4 p-4 h-screen w-auto ' + classes}></span>
        </div>
    )
}

export default DrawerSkeleton