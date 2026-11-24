const express = require('express');
const router = express.Router();

// TODO (Member 3): GET /services -> res.render('services', { categories: [...] })
const services = [
    {
        name: 'Plumbing',
        description: 'Report leaking pipes, blocked drains, or broken taps.'
    },
    {
        name: 'Electrical Repairs',
        description: 'Report faulty lights, switches, or power outlets.'
    },
    {
        name: 'Heating',
        description: 'Report a broken heater or a heating system issue.'
    },
    {
        name: 'Elevator Maintenance',
        description: 'Report an elevator that is out of service.'
    }
];

router.get('/', (req, res) => {
    res.render('services', {
        title: 'Services',
        services: services
    });
});

module.exports = router;
