import { useNavigate } from 'react-router-dom';
import cardStyle from './styles.module.css'
import { IMAGES_URL } from '../../api';
import { MovieCardProps } from '../../api/types';

export const MovieCard = ({
  adult,
  id,
  title,
  poster_path
}: MovieCardProps) => {
  const navigate = useNavigate()
  return (
    <li onClick={() => {navigate(`/movies/${id}`)}} className={cardStyle.card}>
      <img className={cardStyle.image} src={IMAGES_URL+poster_path} alt="Movie image" />
      <h2 className={cardStyle.name}>{title}</h2>
      { adult && (<span className={cardStyle.adult}> "18+"</span>)} 
    
    </li>
  );
};
