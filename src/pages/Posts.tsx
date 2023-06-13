import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
import { posts } from '../data';
import { PostType } from '../types';
import '../styles/Posts.css';

export default function Posts() {
  const userPosts: PostType[] = posts; // TODO: recebe os posts do usuário selecionado
  const params = useParams();
  const { id } = params;

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>Posts</h1>
      <div className="posts-list">
        {userPosts.filter((post) => post.id === Number(id))
          .map((post) => (
            <Post key={ post.id } postData={ post } />
          ))}
      </div>
    </div>
  );
}
