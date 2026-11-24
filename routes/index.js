const express = require('express');
const router = express.Router();

// TODO (Member 3): GET /      -> res.render('index', { ... })
// TODO (Member 3): GET /about -> res.render('about', { ... })
const teamMembers = [
    { name: 'YousefSamerBaseemAbu-AlSoud', studentId: '202310168' },
    { name: 'YousefAbdullahMohammedAl-Husseini', studentId: '202310661' },
    { name: 'YousefOsamaYousefSalameh', studentId: '202320192' },
    { name: 'ThanaaSamerOsamaMansour', studentId: '202410612' }
];

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        appName: 'FixFlow',
        announcement: 'You can now explore our maintenance services.'
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        teamMembers: teamMembers
    });
});

module.exports = router;
