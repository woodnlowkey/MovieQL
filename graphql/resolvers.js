const wnlk = {
    name: "choi woo jin",
    age: 32,
    gender: "female",
    email: "vxrs3310@naver.com"
}

const resolvers = {
    Query: {
        person: () => wnlk
    }
};



export default resolvers;