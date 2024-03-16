import { ApolloServer } from "apollo-server"
import { schema } from "./schema"

const boot = () => {
    const server = new ApolloServer({
        schema,
    })

    server.listen(3000).then(({ url }) => {
        console.log("Listening on " + url)
    })
}

boot()