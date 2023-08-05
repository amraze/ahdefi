import React from 'react';
import { FlagCircleRounded, SpaceDashboardRounded, Brightness4Rounded, Person2Outlined } from '@mui/icons-material';
import './sidebar.css';

export default function Sidebar({ theme, changeTheme }) {
    function handleContainerClick(event) {
        const containers = document.getElementsByClassName('container');
        Array.from(containers).forEach((element) => {
            element.style.backgroundColor = null;
        });
        event.currentTarget.style.backgroundColor = theme?.background;
    }

    return (
        <aside style={{ backgroundColor: theme?.sidebar, borderRight: '1px solid', borderRightColor: theme?.borders }}>
            <div className="container" style={{ backgroundColor: theme?.background, color: theme?.text }} >
                <FlagCircleRounded />
                <div>Goals</div>
            </div>
            <div className="container" style={{ color: theme?.text }} onClick={handleContainerClick}>
                <SpaceDashboardRounded />
                <div>Cards</div>
            </div>
            <div className="profile">
                <div className="container" style={{ color: theme?.text }} onClick={handleContainerClick}>
                    <Person2Outlined />
                    <div>Income</div>
                </div>
                <div className="contrast" style={{ backgroundColor: theme?.background, borderColor: theme?.borders, color: theme?.text }}>
                    <Brightness4Rounded onClick={changeTheme} sx={{ ':hover': { cursor: 'pointer' } }} />
                </div>
            </div>
        </aside>
    );
}
