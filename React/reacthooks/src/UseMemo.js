import { useEffect, useMemo, useState } from 'react';
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
    const [value, setValue] = useState('');

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
            <p>
                {/*toda vez que escrevo algo no input o estado de value é alterado, isso faz com que todos os componentes sejam renderizados novamente*/}
                {/*os posts também são renderizados novamente, isso pode ocasionar lentidão*/}
                <input type='search' value={value} onChange={(e) => setValue(e.target.value)} />
            </p>
            {/*useMemo é ultilizado para memorizar componentes ou valores*/}
            {useMemo(() => {
                return (
                    posts.length > 0 &&
                    posts.map((post) => {
                        return <Post post={post} key={post.id} />;
                    })
                );
            }, [posts])}
            {posts.length <= 0 && (
                <p>Sem posts no momento</p>
            )}
        </div>
    );
}

export default UseMemoApp;
