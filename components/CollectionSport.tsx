import React from "react";

const Collection = () => {
  interface Spotlight {
    teamName: string
    image: string
    date: string
    address: string
  };

  const initialSpotlights: Spotlight[] = [
    {
      teamName: 'Las Vegas Avitors',
      image: 'https://i.postimg.cc/zVMhw0xV/images.jpg',
      date: 'OCT15|SUN|4:30PM',
      address: 'Las Vegas Ballpark,Las Vegas,Nevada',
    },
    {
      teamName: 'Sacramento River Cats',
      image: 'https://i.postimg.cc/KvxzphSf/images-1.jpg',
      date: 'OCT15|SUN|4:30PM',
      address: 'Las Vegas Ballpark,Las Vegas,Nevada',
    },
    {
      teamName: 'Las Vegas Avitors',
      image: 'https://i.postimg.cc/zVMhw0xV/images.jpg',
      date: 'OCT15|SUN|4:30PM',
      address: 'Las Vegas Ballpark,Las Vegas,Nevada',
    },
  ]
  return (

    <div className="ms-30 me-33 mt-6 w-4/5 ml-px">
      <link rel="stylesheet" href="style.css" />
      <section className="Spotlight mt-6">
        <div className="text-center mx-18 my-px-6">
          <p className="text-3xl font-bold mb-3">Collection Spotlight</p>
          <p className="text-xs w-3/4 text-center ml-28">
            Discover extraordinary moments with our Spotlight Collection
            metatickets-exclusive access to premium events for an inforgatable expirience.Grab yours today!
          </p>
        </div>
        <div className="flex justify-between ms-70 me-75 mt-12 px-px-2">
          {
            initialSpotlights.map((ele) => (
              <>
                <div className="w-48 pb-3 dark:bg-gray px-px-4  border-2">
                  <img className="w-30 h-80 pt-3 pl-3 pr-3 pb-3" src={ele.image} />
                  <p>-------------------------</p>
                  <div className=" text-center dark:bg-gray h-44 pt-2">
                    <h3 className=" inline-block text-bold text-sm ">{ele.teamName}</h3>
                    <p className="inline text-xs text-white ">{ele.date}</p>
                    <p className="text-light text-xs ms-3 text-center mt-2">{ele.address}</p>
                    <button className=" bg-slate py-2 px-2 text-xs mt-5 text-white">Take Flight Collection</button>

                  </div>
                </div>
              </>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Collection;
