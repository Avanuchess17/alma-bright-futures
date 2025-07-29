import ImageEditor from '@/components/ImageEditor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ImageEditorPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-10">
        <ImageEditor />
      </div>
      <Footer />
    </div>
  );
};

export default ImageEditorPage;