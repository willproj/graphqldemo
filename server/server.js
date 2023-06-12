const {ApolloServer} = require("apollo-server");
const {typeDefs}=require("./gqlSchema/typedefs")
const {resolvers}=require("./gqlSchema/resolvers")

const server=new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Your api is running: ${url}`);
})


