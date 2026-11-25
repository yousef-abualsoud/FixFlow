const express = require('express');
const router = express.Router();
const tickets = [
    { id: 1, title: 'Water Leak', category: 'Plumbing', location: 'Building A', description: 'Water leaking from the kitchen pipe.', urgency: 'High', status: 'Open' },
    { id: 2, title: 'Electrical Problem', category: 'Electrical', location: 'Building B', description: 'Lights are not working.', urgency: 'Medium', status: 'In Progress' },
    { id: 3, title: 'Broken Heater', category: 'Heating', location: 'Building C', description: 'The heater is not working.', urgency: 'Low', status: 'Resolved' },
    { id: 4, title: 'Elevator Out of Service', category: 'Elevator', location: 'Building D', description: 'The elevator is stuck between floors and is out of service.', urgency: 'High', status: 'Open' }
];
router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const ticket = tickets.find(t => t.id === id);
    if (!ticket) {
        return res.status(404).render('error404', { title: 'Ticket Not Found' });
    }
    res.render('ticket-detail', { title: 'Ticket Details', ticket: ticket });
});
module.exports = router;