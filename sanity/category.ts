import { defineType,defineField } from "sanity"
// defineType or defineField intelisense hai khud btate hai type ko k kn kn c type use krni h

// defineType document type k liye yha use kiya h
export const category = defineType( {
    name:"category",
    title:"Category",
    type:"document",
    fields: [
        defineField({
        name:"name",
        title:"Category Name",
        type:"string",
    }),
]
}
)