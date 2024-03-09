import React from "react";

export default function ProductDetailsLayouts({
    children
}:{
    children: React.ReactNode;
}) {
    return(
        <>
            {children}
            <h2>Feature Products</h2>
        </>
    )
}