import React, { useEffect } from 'react';
import { NotificationsNone, Link, Description, ModeEditOutlineOutlined, AddOutlined, DoneOutlined, DeleteForeverOutlined } from '@mui/icons-material';
import AddGoalModal from '../modals/AddGoalModal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './goals.css';
import GoalService from '../../services/goalService';
import { Box } from '@mui/material';

export default function Goals({ theme }) {
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [goals, setGoals] = React.useState([]);

    const handleClose = () => { setOpen(false); getGoals(); };
    const handleOpen = () => { setEdit(false); setOpen(true) };
    const handleEdit = () => setEdit(!edit);
    const handleDelete = async (goalId) => { await GoalService.deleteGoal(goalId); await getGoals(); };

    useEffect(() => { getGoals() }, []);

    function calculatePercentage(balance, price) {
        return Math.round((balance / price) * 100);
    }

    function calculateDaysLeft(balance, income, price) {
        const leftMoney = price - balance;
        return Math.round(leftMoney / income);
    }

    const getGoals = async () => {
        const data = await GoalService.getGoals();
        setGoals(data);
    };

    return (
        <section style={{ backgroundColor: edit ? theme.sidebar : theme.background }}>
            {Array.isArray(goals) ? goals.map((goal, index) => {
                const percentage = calculatePercentage(0, goal.price);
                const daysRemaining = calculateDaysLeft(0, 4.44, goal.price);

                return (
                    <div className="card" style={{ color: theme?.text, backgroundColor: edit ? theme.background : theme.cards, border: '1px solid', borderColor: theme?.borders }} key={index}>
                        <div>
                            <h1 className='title'>{goal.title}</h1>
                            <div className='description'>
                                <Description />
                                <small>{goal?.description}</small>
                            </div>
                            <div className='link'>
                                <Link />
                                {goal.link ? (
                                    <small><a href={goal.link} target="_blank" rel="noreferrer" >Link of the product</a></small>
                                ) : (
                                    <small>No link provided</small>
                                )}
                            </div>
                            <div className='days'>
                                <NotificationsNone sx={{ fontSize: 16 }} />
                                <small style={{ fontSize: '14px' }}>{daysRemaining} days remaining</small>
                            </div>
                            <ProgressBar now={percentage} label={`${percentage} %`} variant="darkcyan" />
                            {edit ? (
                                <Box onClick={() => handleDelete(goal.id)} className='price' sx={{
                                    backgroundColor: 'red !important',
                                    ':hover': {
                                        backgroundColor: 'darkred !important',
                                        cursor: 'pointer',
                                    },
                                }} >
                                    <DeleteForeverOutlined />
                                </Box>
                            ) : (
                                <Box className='price'>
                                    {goal.price} TND
                                </Box>
                            )}
                        </div>
                        <div className='image'>
                            <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg" alt="" />
                        </div>
                    </div>
                );
            }) : null}

            <div className="buttons">
                {edit ? (
                    <DoneOutlined onClick={handleEdit} style={{ color: theme?.text, borderRadius: '5px', fontSize: '40px', padding: '0px 10px' }}
                        sx={{
                            backgroundColor: 'transparent',
                            ':hover': {
                                backgroundColor: theme?.borders,
                                cursor: 'pointer',
                            },
                        }} />

                ) : (
                    <ModeEditOutlineOutlined onClick={handleEdit} style={{ color: theme?.text, borderRadius: '5px', fontSize: '40px', padding: '0px 10px' }}
                        sx={{
                            backgroundColor: 'transparent',
                            ':hover': {
                                backgroundColor: theme?.borders,
                                cursor: 'pointer',
                            },
                        }} />
                )}
                <AddOutlined onClick={handleOpen} style={{ color: theme?.text, borderRadius: '5px', fontSize: '40px', padding: '0px 10px' }}
                    sx={{
                        backgroundColor: 'transparent',
                        ':hover': {
                            backgroundColor: theme?.borders,
                            cursor: 'pointer',
                        },
                    }} />
                <AddGoalModal theme={theme} open={open} handleClose={handleClose} />
            </div>
        </section >
    );
}
