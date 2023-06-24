import { createClient } from "next-sanity"
//createClient ak function h jis mai mukhtlif object sanity se related cheze as mai pass krte hai as u se below
// import { apiVersion,dataset,projectId,useCdn } from "../env"

export const client = createClient({
    apiVersion:"2023-06-20", // ye sanity studio Vision se niklna h jha se data fetch krte
    dataset:"production",   //.env file se dataset production leni h
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACCESS_TOKEN,
    useCdn:true,
})






