import axios from 'axios';
import Footer from '../Footer'; // Asegúrate de que la ruta sea correcta
import NavBar from '../Navbar'; 


import ImageComponent from './fotos';
const Blog = async () => {

  

  try {
    const response = await axios.get('http://localhost:1337/api/posts');
    const posts = response.data.data;
    console.log(response.data.data);
    

    return (
      
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
     
     
      <main>
      <h1 className="text-3xl pt-4 pb-4 font-bold text-center sm:text-center mx-auto">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-gray-900 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-bold text-center text-white">{post.titulo}</h2>
            <ImageComponent
            imageId={1}
            size="thumbnail"
            className="w-full h-64"
            fallbackText=""
            />
            <p className="text-gray-300">{post.descripcion}</p>
            <p className="text-gray-300 text-center"><b>Realizado en {post.fecha}</b></p>

          </article>
        ))}
        
      </div></main>
      <Footer/>
      </div>
      
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 rounded-lg p-4 shadow-lg text-3xl font-bold text-red-500 dark:bg-red-900 dark:text-red-300">
        Error fetching posts. Please try again later.
      </div>
  );
  }
};

export default Blog;
