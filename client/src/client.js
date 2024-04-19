import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client=createClient({
    projectId:'vaoa60y2',
    dataset:'production',
    token:'skmG9fgFwnK6kOb8MSErCkDgfF0OukUfkkPDx1OVnukIO4XfKF2byk1D7Ls7ZrPovmRs5iNEJR7SKNvWAlgJH1D6lIV6kZ7JsCxcfkImgfZdd8Udq8tZMcuYfbfnWa8SSTZJO8g1b3ONwxQ23eAhZGO6wN6Pvxk9gI1aiQy3RuzVDOT3wMk6',
    useCdn:true,
    apiVersion:'2023-11-29'
    
})

const builder=imageUrlBuilder(client)
export const urlFor=(source)=>builder.image(source)