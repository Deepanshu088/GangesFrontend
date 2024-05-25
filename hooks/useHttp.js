import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/slices/userSlice";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { authToken } = useSelector(state => state?.user);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const signOut = useCallback(() => {
        dispatch(logoutUser());
        localStorage.clear();
        // navigate("/login");
    }, [dispatch]);

    const apiService = useCallback(async (path, method, body, headers, isFileUpload = false) => {
        setIsLoading(true);
        const url = process.env.NEXT_PUBLIC_API_BASE_URL + path;
        console.log(url),
            console.log(path);
        try {
            let headerPayload = {
                "Authorization": `Bearer ${authToken}`
            };

            if (!isFileUpload) {
                headerPayload["Content-Type"] = "application/json";
            }

            headerPayload = {
                ...headerPayload,
                ...headers,
            };

            const response = await fetch(url, {
                method: method ?? "GET",
                headers: headerPayload,
                body: isFileUpload ? body : (body ? JSON.stringify(body) : null),
            });

            if (response.status === 401) {
                // Remove the token if its invalid or expired.
                signOut();
                setIsLoading(false);
                return null;
            }

            const data = await response.json();
            setIsLoading(false);

            if (!response.ok) {
                throw new Error(data.message || data.error || data.errors || "Something went wrong!");
            }

            return data;
        } catch (e) {
            // Handle errors
            setIsLoading(false);
            setError(e?.message);
            throw e;
        }
    }, [authToken, signOut]);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        isLoading,
        error,
        apiService,
        clearError,
    };
};

export default useHttp;
