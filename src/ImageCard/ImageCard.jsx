import css from './ImageCard.module.css';

export default function ImageCard({ item, onClick }) { 
    return (
        <div className={css.card} onClick={onClick} style={{ cursor: 'pointer' }}>
            <div>
                <img 
                    src={item.urls.small} 
                    alt={item.alt_description}
                />
            </div>
        </div>
    );
}