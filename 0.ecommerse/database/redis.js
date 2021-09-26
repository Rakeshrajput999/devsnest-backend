/**
 * day 12 redis connectivity 
 * redis store  to store data 
 * redis client  to make connection
 * installl allthis library
 * @requires express-session
 * @requires redis
 * @requires connect-redis
 * 
 * 
 * 
 */

const redis = require("redis")
const connectRedis = require("connect-redis")
const session = require("express-session")



const RedisStore = connectRedis(session)



const redisClient= redis.createClient({
    host:"localhost",
    port:6379
})
redisClient.on("error",(err)=>{
    console.error("ould not connect to redis ",err)
})
redisClient.on('connect',()=>{
    console.log("connected to redis ");
    
})
module.exports={
    redisClient,RedisStore,session
}