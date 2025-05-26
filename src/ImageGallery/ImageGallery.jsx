import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}