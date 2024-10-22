import {Hono} from 'hono'
import { logger } from 'hono/logger'
import { expenseRoute } from './routes/expenses'
import { serveStatic } from 'hono/serve-static'
import {file} from 'bun'
const app = new Hono()
app.use('*' , logger())
app.get('/test' , c=>{
    return c.json({"message" :"test"})
})

app.route("/api/expenses" ,expenseRoute)

app.use('*', serveStatic({ root: './Frontend/dist',
    getContent: async (path, c) =>{
        try{
            const files = file(path)
            return new Response(files)
        }catch(err){
            return c.notFound()
        }
        
    },
 }
));



app.get('*', serveStatic({
    path: './Frontend/dist/index.html',
    getContent: async (path, c)=> {
        try{
            const files = file(path)
            return new Response(files)
        }catch(err){
            return c.notFound()
        }
        
    },

}))


export default app