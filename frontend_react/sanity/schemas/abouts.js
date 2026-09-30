export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'title_fr',
            title:'Title (FR)',
            type:'string',
            description:'French version. Leave empty to show the English text.'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'description_fr',
            title:'Description (FR)',
            type:'string',
            description:'French version. Leave empty to show the English text.'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}