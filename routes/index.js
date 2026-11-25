const express = require('express');
const router = express.Router();

// TODO (Member 3): GET /      -> res.render('index', { ... })
// TODO (Member 3): GET /about -> res.render('about', { ... })
const teamMembers = [
    { name: 'Yousef Samer Baseem Abu-Al Soud', studentId: '202310168' },
    { name: 'Yousef Abdullah Mohammed Al-Husseini', studentId: '202310661' },
    { name: 'Yousef Osama Yousef Salameh', studentId: '202320192' },
    { name: 'Thanaa Samer Osama Mansour', studentId: '202410612' }
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
