import { defineField } from "sanity";

export const product = {
    name:"product",
    type:"document",  //type document se murad h k as k ander kn kn c field ho gy. as k ander kn kn c field ho gey
    title:"Product",
    fields:[
        {
            name:"title",
            title:"Product Title",
            type:"string"
        },
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"price",
            title:"product Price",
            type:"number",
        },
        {
            name:"image",
            title:"Product image",
            type:"image"
        },
        defineField({
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[
                {
                type:"category"
            }
        ]
        }),
        
    ]
}