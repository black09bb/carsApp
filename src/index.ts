import appPromise from "./app"

appPromise.then(({ app }) => {
    console.log('tutaj', process.env);
    
    app.listen(process.env.RDS_PORT || 8002)
    console.log(`app is running on port ${process.env.RDS_PORT || 8002}`)
}).catch(console.log)