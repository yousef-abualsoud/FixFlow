const express = require('express');
const router = express.Router();

// TODO (Member 3): GET /services -> res.render('services', { categories: [...] })
const services = [
    {
        name: 'Plumbing',
        description: 'Report leaking pipes, blocked drains, or broken taps.',
        sampleTicketId: 1
    },
    {
        name: 'Electrical Repairs',
        description: 'Report faulty lights, switches, or power outlets.',
        sampleTicketId: 2
    },
    {
        name: 'Heating',
        description: 'Report a broken heater or a heating system issue.',
        sampleTicketId: 3
    },
    {
        name: 'Elevator Maintenance',
        description: 'Report an elevator that is out of service.',
        sampleTicketId: 4
    }
];

router.get('/', (req, res) => {
    res.render('services', {
        title: 'Services',
        services: services
    });
});

module.exports = router;
