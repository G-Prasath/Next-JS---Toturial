import React from 'react'

const layout = ({
    children,
    users,
    notifications,
    metricx,
    signin }: {
        children: React.ReactNode;
        users: React.ReactNode;
        notifications: React.ReactNode;
        metricx: React.ReactNode;
        signin: React.ReactNode;
    }) => {
    const isLoggedin = false;

    return isLoggedin ? (
        <div>
            {children}
            <div className='flex'>
                <div className='flex flex-col'>
                    <div>{users}</div>
                    <div>{metricx}</div>
                </div>
                <div className='flex flex-1'>
                    {notifications}
                </div>
            </div>
        </div>
    ) : (
        signin
    );
}

export default layout