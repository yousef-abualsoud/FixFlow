const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routers
const indexRouter = require('./routes/index');
const servicesRouter = require('./routes/services');
const ticketsRouter = require('./routes/tickets');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/services', servicesRouter);
app.use('/tickets', ticketsRouter);
app.use('/contact', contactRouter);

// Catch-all 404 for any route that did not match above
app.use((req, res) => {
  res.status(404).render('error404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
  console.log(`FixFlow running at http://localhost:${PORT}`);
});
