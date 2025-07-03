
import { useNavigate } from 'react-router-dom';

export const useLoadingNavigation = () => {
  const navigate = useNavigate();

  const navigateWithLoading = (targetPath: string) => {
    // Navigate to loading page with the target path in state
    navigate('/loading', { state: { targetPath } });
  };

  return navigateWithLoading;
};
