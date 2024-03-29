import React from "react";

const Sportcards = () => {
  interface Cards {
    teamName: string
    image: string
    totalEvents: string
    sport: string
  };
  const initialCards: Cards[] =
    [
      {
        teamName: ' Sacramento River Cats',
        image: 'https://i.postimg.cc/KvxzphSf/images-1.jpg',
        totalEvents: '48 Events',
        sport: 'Baseball'
      },
      {
        teamName: 'Las Vegas Aviators',
        image: 'https://i.postimg.cc/FRqBcx4q/gettyimages-1172345799-612x612.jpg',
        totalEvents: '28 Events',
        sport: 'Baseball'
      },
      {
        teamName: 'New Jersey Devils',
        image: 'https://iili.io/Jh0su71.jpg',
        totalEvents: '15 Events',
        sport: 'Ice Hokey'
      },
      {
        teamName: ' Las Vegas Aviators',
        image: 'https://i.postimg.cc/KvxzphSf/images-1.jpg',
        totalEvents: '28 Events',
        sport: 'Baseball'
      },
    ]
  return (
    <div>
      <link rel="stylesheet" href="style.css" />
      <h3 className="font-bold ml-4 mt-8 mb-2">Sports</h3>
      <div className="flex justify-between w-4/5 ms-30 me-33 mr-3 ml-px">
        {
          initialCards.map((ele) => (
            <>
              <section className="card pl-2">
                <div className="w-48 dark:bg-gray pb-3 border-2">
                  <img className="w-full h-80 pt-3 pl-3 pr-3 pb-3" src={ele.image} />
                  <div className="text-start  align-center">
                    <h3 className=" text-xs font-bold ml-3">{ele.teamName}</h3>
                    <div className="dark:bg-zinc bg-stone mt-1 w-44 mx-1">
                      <div className=" w-full pt-2 pl-2 pr-2 pb-2 inline-flex mt-0">
                        <p className="inline-flex text-xs">Total Events</p>
                        <p className="text-xs ms-8">Sport</p>

                      </div>
                      <div className="w-full pt-0 pl-2 pr-2 pb-1 inline-flex mt-0 font-bold">
                        <p className="text-xs font-bold">{ele.totalEvents}</p>
                        <p className="text-xs font-bold ms-8">{ele.sport}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </section>
            </>
          ))
        }
       
        <section className="card pl-2 text-start">
          <div className="w-48 dark:bg-gray pb-2 border-2">
            <img className="w-full h-48 pt-3 pl-3 pr-3 pb-3" src='https://media.sodagift.com/img/image/51971190711515.jpg' />
            <div className="px-1.5">
              <h3 className=" text-s mt-2 mb-2 text-left font-bold">Advertisement title</h3>
              <div className=" mt-1">
                <div className=" w-full pt-2 pb-3 inline-flex mt-0">
                  <p className="inline text-xs">DICK'S Sporting Goods Teams Up with Actors Will Arnett and Kathryn Hahn for New Ecommerce Campaign.
                    1948. DICK'S Sporting Goods was founded by an 18-year old Richard “Dick” Stack with $300 from his grandmother's.
                  </p>

                </div>
                <div className="w-full pt-0 pl-2 pr-2 pb-1 inline-flex mt-0 font-bold">
                  <p className="text-white text-xs font-bold"></p>
                  <p className="text-white text-xs font-bold ms-8"></p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
      <div className="flex justify-center mt-5">
        <button className="text-xs text-bold bg-blue py-2 px-4">See More</button>
      </div>
    </div>
  );
};

export default Sportcards;
