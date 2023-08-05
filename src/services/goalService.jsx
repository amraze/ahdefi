import Constants from '../utils/constants';
const { apiURL } = Constants.endpoints;

async function createGoal(goalData) {

    if (goalData.title.trim() !== '') {
        try {
            const response = await fetch(`${apiURL}/goals`, {
                method: 'POST',
                body: JSON.stringify(goalData),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();

            if (!data.ok) {
                return ({ 'ok': false }, { 'message': 'Error creating goal' });
            }

            return data;
        } catch (error) {
            return ({ 'ok': false }, { 'message': 'Please ensure all fields are filled correctly.' });
        }
    } else {
        return ({ 'ok': false }, { 'message': 'Title field required' });
    }
}

async function getGoals() {
    try {
        const response = await fetch(`${apiURL}/goals`, {
            method: 'GET',
        });

        const data = await response.json();

        if (!data.ok) {
            return ({ 'ok': false }, { 'message': 'Error getting goals' });
        }

        return data.data;
    } catch (error) {
        return ({ 'ok': false }, { 'message': error.message });
    }
}

async function updateGoal() {

}

async function deleteGoal(goalId) {
    try {
        const response = await fetch(`${apiURL}/goals/${goalId}`, {
            method: 'DELETE',
        });

        const data = await response.json();

        if (!data.ok) {
            return ({ 'ok': false }, { 'message': 'Error deleting goals' });
        }

        return data;
    } catch (error) {
        return ({ 'ok': false }, { 'message': error.message });
    }
}

const GoalService = {
    createGoal,
    getGoals,
    updateGoal,
    deleteGoal
};

export default GoalService;
