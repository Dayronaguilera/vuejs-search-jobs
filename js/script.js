Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                  id: 1,
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'logo.jpg',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'volocom technology',
                    position: 'Front End Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/24/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Part Time'
                },  
                {
                    id: 3,
                    company: 'Umana spa',
                    position: 'Junior developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/26/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Partita IVA'
                },  
                {
                    id: 4,
                    company: 'Iselection',
                    position: 'Programmatori java',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/30/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Stage'
                },  
    
            ],
            starred: [1, 2],
            applied: [4, 5]    
        },
        methods:{
            like: function (array, id) {
                array.push(id)
            },
            notLike: function (array, id) {
                let index = array.indexOf(id)
                array.splice(index, 1)
            },
        }
    }
 );
  

