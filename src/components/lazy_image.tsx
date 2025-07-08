import {LazyLoadImage} from 'react-lazy-load-image-component'
import type {ReactElement} from "react";

interface LazyImageType {
    alt: string,
    src: string,
    placeholder?: ReactElement,
    classes?: string,
}

function LazyImage({alt, src, placeholder, classes}: LazyImageType) {
    return (
        <LazyLoadImage
            className={classes}
            alt={alt}
            src={src}
            placeholder={placeholder}
        />
    )
}

export default LazyImage