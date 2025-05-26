import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({onClick}) { 
    return (
        <>
            <button className={css.load} onClick={onClick}>Load more</button>
        </>
    );
}
    