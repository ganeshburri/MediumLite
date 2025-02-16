import { useState, useEffect } from "react";

function useIsSignedIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        setIsSignedIn(false);
        setLoading(false);
        return;
    }
    else {
        setIsSignedIn(true);
        setLoading(false);
    }
    }, []);
    return { isSignedIn, loading };
}

export default useIsSignedIn;