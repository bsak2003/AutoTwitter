import './pre-start'; // Must be the first import
import app from '@server';
import { log } from 'console';


// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    log(`Express server started on port: ${port}`);
});
