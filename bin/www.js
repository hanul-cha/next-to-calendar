const app = require('../server');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`서버가동 포트: ${PORT}`)
})