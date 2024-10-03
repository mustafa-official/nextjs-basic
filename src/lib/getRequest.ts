export default async function getComments() {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments', {next: {revalidate: 3600}});
    const data = res.json();
    return data;
}
export  async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = res.json();
    return data;
}

export async function getPhotos(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    const data = await res.json();
    return data;
}