const {app} = require('./app')
const PORT = process.env.PORT || 7070

const server = app.listen(PORT, () => {
    console.log(`SERVER STARTED ON: [${PORT}]`)
})