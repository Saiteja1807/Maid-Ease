// ProtectedComponent.js
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedComponent = ({ component: Component }) => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  if (!loggedIn) {
    navigate('/login');
    return null;
  }

  return <Component />;
};

export default ProtectedComponent;
