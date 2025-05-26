import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import { fetchImages } from './images-api';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setCurrentPage(1);
    setImages([]);
  };

  const addPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }

    async function fetchData() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(topic, currentPage);
        setImages((prevImages) => [...prevImages, ...data.images]);
        setTotalPages(data.totalPages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage, topic]);

  const lastPage = currentPage === totalPages;
  const hasImages = images.length > 0;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage/>}
      {hasImages && <ImageGallery items={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {hasImages && !loading && !lastPage && <LoadMoreBtn onClick={addPage} />}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        image={selectedImage} 
      />
      <Toaster position="top-right" />
    </>
  );
}