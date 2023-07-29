import { useEffect, useState } from "react";
import Constants from "./constants";

export const useGetThemeColor = () => {
    const { colors } = Constants;
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        let localStorageTheme = localStorage.getItem('theme') ?? 'light';
        if (localStorageTheme === 'light') {
            localStorageTheme = colors.light;
        } else {
            localStorageTheme = colors.dark;
        }

        setTheme(localStorageTheme);
    }, [colors.light, colors.dark]);

    return theme;
};
