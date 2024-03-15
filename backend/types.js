// for input validation 
const zod = require("zod");
/*ZOD schema 
{
    title:string
    description:string
}
{
    id:string
}
*/

//Post request
const createTodo = zod.object({
    title: zod.string(),
  description: zod.string() // Fix the typo here, change "descrription" to "description"
})

//put request
const updateTodo = zod.object({
    id: zod.string()
})

//for export the file 
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}