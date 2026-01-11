import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Banyo resimleri
import banyo1 from '../assets/banyo/04ee6ff6-644f-4d0b-8230-e02d86cbabed.jpg';
import banyo2 from '../assets/banyo/0bcb9f15-5c67-46bb-8b4c-7619dc31adfe.jpg';
import banyo3 from '../assets/banyo/4ef27e9b-5507-422f-81d5-5d1734881398.jpg';
import banyo4 from '../assets/banyo/58489ccb-e734-4b96-90c4-17a6c179aaf7.jpg';
import banyo5 from '../assets/banyo/a02bd20a-55dc-4569-81d6-2998b3365f6a.jpg';
import banyo6 from '../assets/banyo/cd9d1924-4300-4680-874f-0f304ac89532.jpg';
import banyo7 from '../assets/banyo/de316f0b-60ed-469f-be1b-0006d05df900.jpg';

// Gardrop resimleri
import gardrop1 from '../assets/gardrop/13aa30be-e34f-4394-89b2-5cfe6bf65e38.jpg';
import gardrop2 from '../assets/gardrop/3ddcd2b5-2976-4ade-8e66-f2acef2a2b9d.jpg';
import gardrop3 from '../assets/gardrop/3ed20d66-312a-4e9d-a9b4-9bbe18afac48.jpg';
import gardrop4 from '../assets/gardrop/528e91d8-4a1f-4187-9ec7-7dbe8617a742.jpg';
import gardrop5 from '../assets/gardrop/841b67b7-fcd4-4e78-8dc1-80a7ebf9cfd6.jpg';
import gardrop6 from '../assets/gardrop/9954ddf3-ef3f-4519-b680-bb6015fb2a4a.jpg';
import gardrop7 from '../assets/gardrop/9d5beecd-8f31-4042-b769-7481da11b020.jpg';
import gardrop8 from '../assets/gardrop/a0df97bc-05de-4d17-8843-78f498d569af.jpg';
import gardrop9 from '../assets/gardrop/a29b178d-9ce1-42a4-abc2-9a5a6af8acd9.jpg';
import gardrop10 from '../assets/gardrop/afca31c0-7247-4ffa-a16e-58264e3c4938.jpg';
import gardrop11 from '../assets/gardrop/c447025a-5314-4574-b5a2-ca9b0a86a724.jpg';
import gardrop12 from '../assets/gardrop/cc13b266-903d-437c-992f-4036d9078acb.jpg';
import gardrop13 from '../assets/gardrop/d1b3ca42-52b0-4753-a958-4d859a5cffa3.jpg';
import gardrop14 from '../assets/gardrop/e4a22f4c-697b-496a-a476-61da6f27a228.jpg';
import gardrop15 from '../assets/gardrop/f65d3a01-890e-4436-a790-6d52f55ac60e.jpg';
import gardrop16 from '../assets/gardrop/f7d64dd5-1b1e-48b8-9dc0-1c2c5a804e70.jpg';
import gardrop17 from '../assets/gardrop/0430d1e8-5829-45df-8588-28c9a4e8fa41.jpg';
import gardrop18 from '../assets/gardrop/848de7e0-947b-4916-8aaa-660856d864f3.jpg';
import gardrop19 from '../assets/gardrop/b13595ce-19ac-427c-9f1a-758f3e9fcf73.jpg';
import gardrop20 from '../assets/gardrop/b96d08ed-7bbc-499b-a943-edb5f70da53c.jpg';
import gardrop21 from '../assets/gardrop/f5948f5d-0c03-4b18-a06b-6e72f4c1e70f.jpg';

// Kombi dolapları resimleri
import kombi1 from '../assets/kombi dolapları/298e170e-7eeb-4b06-82e1-404952482f11.jpg';
import kombi2 from '../assets/kombi dolapları/34023506-493f-4cf7-91e9-ea320c645abc.jpg';
import kombi3 from '../assets/kombi dolapları/64cdd58b-334d-45ad-a868-21049088062c.jpg';
import kombi4 from '../assets/kombi dolapları/bb64c012-c5f3-4e87-85ec-0338a22a6144.jpg';
import kombi5 from '../assets/kombi dolapları/c06b2948-24e8-4e30-a6a9-957f9f44945f.jpg';
import kombi6 from '../assets/kombi dolapları/f856187f-a1c0-499c-9b65-e99fce5a6a87.jpg';
import kombi7 from '../assets/kombi dolapları/0acbb968-aa7c-4595-b768-2deb2d43f233.jpg';
import kombi8 from '../assets/kombi dolapları/579f50cd-aedf-4663-863f-4533f944c019.jpg';
import kombi9 from '../assets/kombi dolapları/6927c129-b662-43d6-b86e-e1effb8dc0c5.jpg';
import kombi10 from '../assets/kombi dolapları/79d90f15-960e-4395-b38b-53be0a56b704.jpg';

// Mutfak resimleri
import mutfak1 from '../assets/mutfak/0b91e147-cfb5-4be4-b9d3-33be83916fe1.jpg';
import mutfak2 from '../assets/mutfak/0c96c649-9f13-490a-836b-384427c23d58.jpg';
import mutfak4 from '../assets/mutfak/45df859d-05e0-4f71-ba02-a8654d0ec924.jpg';
import mutfak5 from '../assets/mutfak/52bddc5f-b5fe-4944-b1b0-dcc1e2db3848.jpg';
import mutfak6 from '../assets/mutfak/555ee883-46fe-46b5-b782-e7871168ca72.jpg';
import mutfak7 from '../assets/mutfak/71708cb0-5ee1-4b01-9a54-8d047a4202aa.jpg';
import mutfak8 from '../assets/mutfak/7594fca8-6312-4bb7-80e0-5adabfeae6f5.jpg';
import mutfak9 from '../assets/mutfak/7f59a39d-6d77-4f90-92df-22a0e5657cce.jpg';
import mutfak10 from '../assets/mutfak/9910cea6-af73-4174-b2ef-7149e68c6f65.jpg';
import mutfak11 from '../assets/mutfak/e3de6e8e-d207-4c02-a2b6-5f71a76a35a7.jpg';
import mutfak12 from '../assets/mutfak/f14d2629-7e6e-415b-951b-04bac2c38ae3.jpg';
import mutfak13 from '../assets/mutfak/f58ad1eb-35db-432f-8ffa-c802385489cb.jpg';
import mutfak14 from '../assets/mutfak/0f2c470a-38dd-451f-ab02-34e1a8d1c01c.jpg';
import mutfak15 from '../assets/mutfak/2671bdfa-affd-4def-9d1d-3e876b29210f.jpg';
import mutfak16 from '../assets/mutfak/2d68f52b-5671-4213-ae9b-02c714f6b409.jpg';
import mutfak17 from '../assets/mutfak/4015faf7-6679-4db3-8faf-a3659356d88f.jpg';
import mutfak18 from '../assets/mutfak/e45dd8b4-5d6f-450e-bd00-74febae913e2.jpg';
import mutfak19 from '../assets/mutfak/fd78009b-827b-425c-937b-97864c66e877.jpg';

// Portmanto resimleri
import portmanto1 from '../assets/portmanto/03e97062-5ab1-45e3-9564-4c41b6fbc272.jpg';
import portmanto2 from '../assets/portmanto/06488d83-56c2-4721-98cc-1e054301a9c9.jpg';
import portmanto3 from '../assets/portmanto/16f21f70-bcb4-413f-af9c-7669e7924f75.jpg';
import portmanto4 from '../assets/portmanto/1a9fb62d-6698-46a9-96ef-bd9f3f9898d0.jpg';
import portmanto5 from '../assets/portmanto/313ec6a7-ad63-45d6-83d5-d08771a3da51.jpg';
import portmanto6 from '../assets/portmanto/54bdc9c5-17ff-44a8-bec3-ad799fcf7569.jpg';
import portmanto7 from '../assets/portmanto/9b685803-4e89-4b99-a9fc-63af91284897.jpg';
import portmanto8 from '../assets/portmanto/9eb4987e-f893-44f9-ac4a-2192d64622aa.jpg';
import portmanto9 from '../assets/portmanto/c2a65343-79db-4c90-b2cc-29baf39544b1.jpg';
import portmanto10 from '../assets/portmanto/cbf58234-4903-4d91-8866-853f57d85f7a.jpg';
import portmanto11 from '../assets/portmanto/d47fb6e0-7d21-4f01-9d0d-5438e3dc537f.jpg';
import portmanto12 from '../assets/portmanto/e28d433f-a06c-4bca-86fd-443ca5c53229.jpg';
import portmanto13 from '../assets/portmanto/10c584a7-a11e-4dee-90ff-b9bb902af670.jpg';
import portmanto14 from '../assets/portmanto/340d5d23-021e-4564-861a-e0e017079c69.jpg';
import portmanto15 from '../assets/portmanto/4ce2ba45-c96a-481e-a5a7-a7e91a6a5f8f.jpg';
import portmanto16 from '../assets/portmanto/89cea4a0-bc7a-4ad4-9a65-74d4f8f23223.jpg';
import portmanto17 from '../assets/portmanto/fe67bf48-5564-41ce-b874-9d4fe9d15139.jpg';

// Ranza resimleri
import ranza1 from '../assets/ranza/1eaadde5-3eec-45e1-97c6-c70af909a303.jpg';
import ranza2 from '../assets/ranza/7dbcbf13-40ed-4e42-9220-d7687e05eb0b.jpg';

// TV Ünite resimleri
import tvImage from '../assets/tv ünite/tv.jpeg';
import tvunite1 from '../assets/tv ünite/74ba30e4-33fe-480e-b6ee-58c503afea36.jpg';
import tvunite2 from '../assets/tv ünite/fcd85a6f-7a2b-4e95-aece-82021c5f1de7.jpg';

// Çok amaçlı dolap resimleri
import cokamacli1 from '../assets/çok amaçlı dolap/09c92a59-8417-43ab-9f37-675adb109561.jpg';
import cokamacli2 from '../assets/çok amaçlı dolap/0dd8bf46-40e8-423c-a182-ba461e17f7ef.jpg';
import cokamacli3 from '../assets/çok amaçlı dolap/42061cef-99fd-4024-83f4-bb9253504f07.jpg';
import cokamacli4 from '../assets/çok amaçlı dolap/9a88d444-b7dd-46c1-95d2-ef3b457df846.jpg';
import cokamacli5 from '../assets/çok amaçlı dolap/bb64c012-c5f3-4e87-85ec-0338a22a6144.jpg';
import cokamacli6 from '../assets/çok amaçlı dolap/bc7bfeae-ee37-4c63-99e0-d98cf7a1d465.jpg';
import cokamacli7 from '../assets/çok amaçlı dolap/bd480f2e-b02a-4b52-b8e1-3cea29bf0184.jpg';
import cokamacli8 from '../assets/çok amaçlı dolap/da8e9421-765b-497e-8479-32c974856730.jpg';
import cokamacli9 from '../assets/çok amaçlı dolap/e72eec9f-a9fa-484f-bd4e-355f176cdaf0.jpg';
import cokamacli10 from '../assets/çok amaçlı dolap/fd75828a-2f08-43ab-94f5-41a9d856d53f.jpg';

type Category = 'Mutfak' | 'Banyo' | 'Gardrop' | 'Kombi Dolapları' | 'Portmanto' | 'Ranza' | 'TV Ünite' | 'Çok Amaçlı Dolap';

interface CategoryData {
  name: Category;
  images: string[];
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories: CategoryData[] = [
    { name: 'Mutfak', images: [mutfak2, mutfak1, mutfak4, mutfak5, mutfak6, mutfak7, mutfak8, mutfak9, mutfak10, mutfak11, mutfak12, mutfak13, mutfak14, mutfak15, mutfak16, mutfak17, mutfak18, mutfak19] },
    { name: 'Banyo', images: [banyo1, banyo2, banyo3, banyo4, banyo5, banyo6, banyo7] },
    { name: 'Gardrop', images: [gardrop14, gardrop1, gardrop2, gardrop3, gardrop4, gardrop5, gardrop6, gardrop7, gardrop8, gardrop9, gardrop10, gardrop11, gardrop12, gardrop13, gardrop15, gardrop16, gardrop17, gardrop18, gardrop19, gardrop20, gardrop21] },
    { name: 'Kombi Dolapları', images: [kombi1, kombi2, kombi3, kombi4, kombi5, kombi6, kombi7, kombi8, kombi9, kombi10] },
    { name: 'Portmanto', images: [portmanto1, portmanto2, portmanto3, portmanto4, portmanto5, portmanto6, portmanto7, portmanto8, portmanto9, portmanto10, portmanto11, portmanto12, portmanto13, portmanto14, portmanto15, portmanto16, portmanto17] },
    { name: 'Ranza', images: [ranza1, ranza2] },
    { name: 'TV Ünite', images: [tvImage, tvunite1, tvunite2] },
    { name: 'Çok Amaçlı Dolap', images: [cokamacli1, cokamacli2, cokamacli3, cokamacli4, cokamacli5, cokamacli6, cokamacli7, cokamacli8, cokamacli9, cokamacli10] },
  ];

  const openCategory = (category: CategoryData) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCategory) return;
    const newIndex = currentIndex === 0 ? selectedCategory.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCategory) return;
    const newIndex = currentIndex === selectedCategory.images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious(e as unknown as React.MouseEvent);
    if (e.key === 'ArrowRight') goToNext(e as unknown as React.MouseEvent);
    if (e.key === 'Escape') setSelectedCategory(null);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Mobilyalarımız
          </h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            El işçiliğiyle ürettiğimiz özel tasarım mobilyalarımıza göz atın
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openCategory(category)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.images[0]}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-amber-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedCategory(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
            onClick={() => setSelectedCategory(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full"
            onClick={goToPrevious}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 hover:bg-black/70 p-3 rounded-full"
            onClick={goToNext}
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedCategory.images[currentIndex]}
                alt={`${selectedCategory.name} ${currentIndex + 1}`}
                className="max-h-[75vh] w-auto mx-auto object-contain rounded-lg"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCategory.name}</h3>
              <p className="text-amber-400">{currentIndex + 1} / {selectedCategory.images.length}</p>
            </div>

            <div className="flex justify-center gap-2 mt-6 overflow-x-auto pb-4 px-4">
              {selectedCategory.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all duration-200 ${idx === currentIndex ? 'border-amber-500 scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
