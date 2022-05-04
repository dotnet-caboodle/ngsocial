import { Console } from 'console';
import express,{ Application} from 'express';
const PORT =8080;
const app:Application=express();
app.get('/',(req,res)=>{
    res.send('Express successfully running');
});
app.listen(PORT, ()=>{
    console.log(`Server is running at localhost ${PORT}`);
})