export const getUsers = (ctx: any) => {
    return ctx.json({
        message: "Get all users",
        data: [{ name: "John Doe", age: 30 }, { name: "Jane Doe", age: 25 }]
    });
}