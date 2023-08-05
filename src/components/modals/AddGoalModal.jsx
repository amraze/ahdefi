import { useState } from 'react';
import AddGoalModalStyles from './AddGoalModalStyles';
import AddGoalModalMarks from './AddGoalModalMarks';
import GoalService from '../../services/goalService';
import { Cancel, DescriptionRounded, Link, LocalOfferRounded, Save, TitleRounded } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, Modal, Slider, TextField, Typography } from '@mui/material';


export default function AddGoalModal({ open, handleClose, theme }) {
    // Constants and custom hooks
    const style = AddGoalModalStyles(theme);
    const marks = AddGoalModalMarks();
    const [formData, setFormData] = useState({ title: '', description: '', link: '', price: 1000 });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handlers and Functions
    const handleGetAriaValueText = (value) => `${value} TND`;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const createGoal = async () => {
        setIsLoading(true);
        const response = await GoalService.createGoal(formData);
        if (!response.ok) {
            setError(response.message);
        } else {
            setError('');
            setFormData({ title: '', description: '', link: '', price: 1000 });
            handleClose();
        }
        setIsLoading(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description" >
            <Box sx={style}>
                {/* Heading */}
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    Add new goal
                </Typography>
                {/* Error Handling */}
                {error && (
                    <Box sx={{ alignItems: 'flex-end', mt: 5, fontSize: 14, }}>
                        <Alert variant="filled" severity="error">
                            {error}
                        </Alert>
                    </Box>
                )}
                {/* Title Field */}
                <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 5 }}>
                    <TitleRounded sx={{ color: theme.text, mr: 1, my: 1 }} />
                    <TextField fullWidth required id="outlined-basic" label="Title" size="small" name="title" value={formData.title} onChange={handleInputChange}
                        sx={{
                            input: { color: theme.text, background: theme.cards, fontSize: 14, borderRadius: 2 },
                            label: {
                                color: theme.text,
                                fontSize: 14,
                                '&.Mui-focused': { color: 'darkcyan' },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 0, borderBottom: 1, borderRadius: 2, borderColor: theme.text },
                                '&.Mui-focused fieldset': { borderColor: 'darkcyan' },
                            },
                        }} />
                </Box>
                {/* Description field */}
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                    <DescriptionRounded sx={{ color: theme.text, mr: 1, my: 1 }} />
                    <TextField fullWidth id="outlined-basic" label="Description" size="small" name="description" value={formData.description} onChange={handleInputChange}
                        sx={{
                            input: { color: theme.text, background: theme.cards, fontSize: 14, borderRadius: 2 },
                            label: {
                                color: theme.text,
                                fontSize: 14,
                                '&.Mui-focused': { color: 'darkcyan' },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 0, borderBottom: 1, borderRadius: 2, borderColor: theme.text },
                                '&.Mui-focused fieldset': { borderColor: 'darkcyan' },
                            },
                        }} />
                </Box>
                {/* Link Field */}
                <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                    <Link sx={{ color: theme.text, mr: 1, my: 1 }} />
                    <TextField fullWidth id="outlined-basic" label="Link" size="small" name="link" value={formData.link} onChange={handleInputChange}
                        sx={{
                            input: { color: theme.text, background: theme.cards, fontSize: 14, borderRadius: 2 },
                            label: {
                                color: theme.text,
                                fontSize: 14,
                                '&.Mui-focused': { color: 'darkcyan' },
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { border: 0, borderBottom: 1, borderRadius: 2, borderColor: theme.text },
                                '&.Mui-focused fieldset': { borderColor: 'darkcyan' },
                            },
                        }} />
                </Box>
                {/* Price Field */}
                <Box sx={{ display: 'flex', alignItems: 'center', my: 5 }}>
                    <LocalOfferRounded sx={{ color: theme.text, mr: 1 }} />
                    <Slider
                        max={50000} aria-label="Always visible" defaultValue={5000} name="price" getAriaValueText={handleGetAriaValueText}
                        step={100} marks={marks} value={formData.price} onChange={handleInputChange} valueLabelDisplay="on"
                        sx={{
                            margin: '1px 3px 1px 1px',
                            "& .MuiSlider-valueLabel": { color: theme.text },
                            "& .MuiSlider-markLabel": { color: theme.text },
                            color: 'darkcyan',
                        }}
                    />
                </Box>
                {/* Action buttons */}
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="submit"
                        onClick={createGoal} sx={{ ":hover": { cursor: 'pointer' } }} style={{ width: '145px', height: '41px', color: theme.background, background: 'darkcyan', borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 14, fontWeight: 'bold', padding: '1% 10%' }}>
                        {isLoading ?
                            <CircularProgress size="24px" sx={{ color: theme.background }} color="secondary" /> :
                            (<>
                                <Save sx={{ color: theme.background }} />
                                <div style={{ padding: '5px 10px', textTransform: 'capitalize' }}>
                                    Save
                                </div>
                            </>)}
                    </Button>
                    <Box onClick={handleClose} sx={{ ":hover": { cursor: 'pointer' } }} style={{ color: theme.text, background: theme.cards, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 14, fontWeight: 'bold', padding: '1% 10%' }}>
                        <Cancel sx={{ color: theme.text }} />
                        <div style={{ padding: '5px 10px' }}>Cancel</div>
                    </Box>
                </Box>
            </Box>
        </Modal >
    )
}
