import type { Ref } from "nuxt/dist/app/compat/capi";
interface Tag {
  id:number
  url: string;
  name: string;
  link:string
}
const tags: Ref<Tag[]> = ref([

  {
    id:1,
    url: "http://st.depositphotos.com/2325841/2530/i/450/depositphotos_25309161-African-Woman-Laughing.jpg",
    name: "Amour",
    link:'/'
  },
  {
    id:2,
    url: "https://st2.depositphotos.com/11564170/42361/i/450/depositphotos_423618498-stock-photo-young-beautiful-fashion-woman-wearing.jpg",
    name: "Business",
    link:'/'

  },
  {
    id:3,
    url: "https://ouvertauxpublics.fr/wp-content/uploads/2018/04/thumbnail-791x1024-1.jpg",
    name: "Complexe",
    link:'/'

  },
  {
    id:4,
    url: "https://images.theconversation.com/files/144422/original/image-20161103-25349-15y2ndq.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    name: "Depression",
    link:'/'

  },
  {
    id:5,
    url: "https://cdn.pixabay.com/photo/2021/05/29/21/59/woman-6294350_960_720.jpg",
    name: "Triste",
    link:'/'

  },
  {
    id:6,
    url: "https://i.pinimg.com/564x/11/c9/03/11c9031470f17d8dc74279bdc0e1b5f7.jpg",
    name: "Autre",
    link:'/'

  },

]);


export {tags}