import React, { useEffect, useState } from "react";
import { authInitialise } from "../../../../FirebaseConfiguration";
import { onAuthStateChanged } from "firebase/auth";



export const UseAuthStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const [checkingStatus, setCheckingStatus] = useState(true);


    useEffect(() => {
        const authenticate = authInitialise;

        onAuthStateChanged(authInitialise, (user) => {
            if (user) {
                setLoggedIn(true);
            }

            setCheckingStatus(false);
        });
    }, []);

    return { loggedIn, checkingStatus };
};
