'use client'



export default function ErrorBoundary({ error, reset }: {
    error: Error;
    reset: () => void;
}) {
    return (
        <>
            <h1 className="text-red-900 bg-white">{error.message}</h1>
            <button type="button" onClick={reset} className="text-pink">Reset</button>
        </>
    )
}