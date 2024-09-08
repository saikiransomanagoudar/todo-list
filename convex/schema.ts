import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    todos: defineTable({
        title: v.string(),
        description: v.string(),
        completed: v.boolean(),
    }),
});

// In order to access the data from Convex we have to define a function called 'query'
// Query: in Convex is something that pulls data from the database
// Mutation: in Convex is something that modifies data in our database

