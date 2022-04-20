import { useEffect, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
    return (
        <div key={post.id} className='post'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

function UseMemoApp() {
    const [posts, setPosts] = useState([]);

    useEffect(() => { //assincrono
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => setPosts(response));
    }, []);

    console.log('Pai Renderizou');
    //é renderizado 2x
    //a primeira renderização ocorre para renderizar os componentes, a segunda ocorre quando os dados da API são carregados e entram nos atributos
    return (
        <div className='App'>
            <h1>UseMemo</h1>
            {posts.length > 0 && posts.map((post) => <Post post={post} key={post.id} />)}
            {posts.length <= 0 && (
                <p>Sem posts no momento</p>
            )}
        </div>
    );
}

export default UseMemoApp;
