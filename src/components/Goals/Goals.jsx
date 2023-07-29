import React from 'react'
import { NotificationsNone, Link, Description } from '@mui/icons-material';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Goals.css'

export default function Goals({ theme }) {
    return (
        <section>
            <div className="card" style={{ color: theme?.text, backgroundColor: theme?.cards, border: '1px solid', borderColor: theme?.borders }}>
                <div>
                    <h1 className='title'>Buy a new car</h1>
                    <div className='description'>
                        <Description />
                        <small>Planning to buy a new GT-950M</small>
                    </div>
                    <div className='link'>
                        <Link />
                        <small><a href="https://facebook.com">Link of the product</a></small>
                    </div>
                    <div className='days'>
                        <NotificationsNone />
                        <small>4 days remaining</small>
                    </div>
                    <ProgressBar now={52} label={`${52} TND`} variant="lightcoral" />
                    <div className='price'>
                        100 TND
                    </div>
                </div>
                <div className='image'>
                    <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg" alt="" />
                </div>
            </div>

            <div className="card" style={{ color: theme?.text, backgroundColor: theme?.cards, border: '1px solid', borderColor: theme?.borders }}>
                <div>
                    <h1 className='title'>Buy a new car</h1>
                    <div className='description'>
                        <Description />
                        <small>Planning to buy a new GT-950M</small>
                    </div>
                    <div className='link'>
                        <Link />
                        <small><a href="https://facebook.com">Link of the product</a></small>
                    </div>
                    <div className='days'>
                        <NotificationsNone />
                        <small>4 days remaining</small>
                    </div>
                    <ProgressBar now={52} label={`${52} TND`} variant="lightcoral" />
                    <div className='price'>
                        100 TND
                    </div>
                </div>
                <div className='image'>
                    <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg" alt="" />
                </div>
            </div>

            <div className="card" style={{ color: theme?.text, backgroundColor: theme?.cards, border: '1px solid', borderColor: theme?.borders }}>
                <div>
                    <h1 className='title'>Buy a new car</h1>
                    <div className='description'>
                        <Description />
                        <small>Planning to buy a new GT-950M</small>
                    </div>
                    <div className='link'>
                        <Link />
                        <small><a href="https://facebook.com">Link of the product</a></small>
                    </div>
                    <div className='days'>
                        <NotificationsNone />
                        <small>4 days remaining</small>
                    </div>
                    <ProgressBar now={52} label={`${52} TND`} variant="lightcoral" />
                    <div className='price'>
                        100 TND
                    </div>
                </div>
                <div className='image'>
                    <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg" alt="" />
                </div>
            </div>

        </section >
    )
}
