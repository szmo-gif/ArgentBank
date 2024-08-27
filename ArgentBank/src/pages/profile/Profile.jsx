import { useSelector } from 'react-redux';
import Argent from '../../compoment/Argent/Argent';

export default function Profile() {
  const user = useSelector((state) => state.user);
  console.log('User object:', user);  // Ajoute ceci pour voir le contenu de l'objet utilisateur

  return (
    <main>
      <h1>Welcome back {user ? user.userName : 'User'}</h1>
      <button>edit name</button>
      <Argent />
    </main>
  );
}
