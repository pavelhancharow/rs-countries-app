import { useNavigate } from 'react-router';
import { Button, NotFound } from '../components';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <NotFound>
      <Button onClick={handleClick}>Go Home</Button>
    </NotFound>
  );
}

export default NotFoundPage;
