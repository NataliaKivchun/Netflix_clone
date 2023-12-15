import { ChangeEvent} from "react";
import genresStyle from "./styles.module.css";

export const GenreChooser = ({
  genresArray,
  handleChooseGenre,
  currentGenre
}: {
  genresArray: { id: number; name: string }[];
  handleChooseGenre: (event: ChangeEvent<HTMLInputElement>) => void
  currentGenre: string
}) => {
  return (
    <div className={genresStyle.genres}>
      <div className={genresStyle.genre}>
          <label className={genresStyle.genre_label}>
            <input className={genresStyle.genre_radio} type="radio" name="genre" value="" checked={currentGenre === "" ? true : false} onChange={handleChooseGenre}/>
            All genres
          </label>
        </div>
      {genresArray.map((genre) => (
        <div className={genresStyle.genre}>
          <label className={genresStyle.genre_label}>
            <input className={genresStyle.genre_radio} type="radio" name="genre" value={genre.id} checked={currentGenre === genre.id.toString() ? true : false} onChange={handleChooseGenre}/>
            {genre.name}
          </label>
        </div>
      ))}
    </div>
  );
};
