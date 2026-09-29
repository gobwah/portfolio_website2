export default {
    name:'workExperience',
    title:'Work Experience',
    type:'object',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'name_fr',
            title:'Name (FR)',
            type:'string',
            description:'French version. Leave empty to show the English text.'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        },
        {
            name:'desc_fr',
            title:'Desc (FR)',
            type:'string',
            description:'French version. Leave empty to show the English text.'
        }
    ]
}
